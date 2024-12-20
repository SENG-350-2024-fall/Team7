import React, { useState, useRef, useEffect } from 'react';
import { GeoapifyContext, GeoapifyGeocoderAutocomplete } from '@geoapify/react-geocoder-autocomplete';
import '@geoapify/geocoder-autocomplete/styles/minimal.css';
import 'material-design-icons/iconfont/material-icons.css';
import { MapPin } from 'lucide-react';
import { waitlistStore } from '../services/WaitlistStore';

const GEOAPIFY_API_KEY = 'e48ad67337a141bb93726b8c8050fd61';

const BrowseEDs = () => {
  const [hospitals, setHospitals] = useState([]);
  const [searchAddress, setSearchAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentWaitlist, setCurrentWaitlist] = useState(null);
  const [searchCoordinates, setSearchCoordinates] = useState(null);
  const geocoderRef = useRef();

  useEffect(() => {
    // Only set up the subscription to waitlist changes
    const unsubscribe = waitlistStore.subscribe(() => {
      // If we have search coordinates, refresh the sorted list
      if (searchCoordinates) {
        const allHospitals = waitlistStore.getHospitals();
        processHospitalData(searchCoordinates.lat, searchCoordinates.lon);
      }
    });

    return () => unsubscribe();
  }, [searchCoordinates]); // Add searchCoordinates as dependency

  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth radius in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const handleGetLocation = async () => {
    setIsLoading(true);
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
      const {latitude: lat, longitude: lon} = position.coords;

      const response = await fetch(
          `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${GEOAPIFY_API_KEY}`
      );
      const data = await response.json();

      if (data.features && data.features.length > 0) {
        const address = data.features[0].properties.formatted;
        setSearchAddress(address);
        setSearchCoordinates({ lat, lon });
        processHospitalData(lat, lon);
      }
    } catch (error) {
      console.error('Error getting location:', error);
      alert('Unable to retrieve your location. Please type in your location!');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchAddress) {
      alert('Please enter an address or get your current location');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
          `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchAddress)}&lang=en&limit=5&filter=countrycode:us,ca&apiKey=${GEOAPIFY_API_KEY}`
      );
      const data = await response.json();

      if (data.features && data.features.length > 0) {
        const coordinates = data.features[0].geometry.coordinates;
        setSearchCoordinates({ lat: coordinates[1], lon: coordinates[0] });
        processHospitalData(coordinates[1], coordinates[0]);
      } else {
        alert('Unable to find the location. Please try again.');
      }
    } catch (error) {
      console.error('Error geocoding address:', error);
      alert('Error processing location. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const processHospitalData = (lat, lon) => {
    const allHospitals = waitlistStore.getHospitals();
    const hospitalsWithDistance = allHospitals.map(hospital => ({
      ...hospital,
      distance: getDistance(lat, lon, hospital.LATITUDE, hospital.LONGITUDE)
    }));

    const sortedHospitals = hospitalsWithDistance
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 10);

    setHospitals(sortedHospitals);
  };

  const handleWaitlistAction = (hospital) => {
    // If leaving current waitlist
    if (currentWaitlist === hospital.SV_NAME) {
      waitlistStore.updateHospitalWaitlist(hospital.SV_NAME, Math.max(0, hospital.currentWaitlist - 1), hospital.estimatedWaitTime);
      waitlistStore.setPosition(null);
      setCurrentWaitlist(null);
      alert(`You have left the waitlist for ${hospital.SV_NAME}`);
      return;
    }

    // If attempting to join new waitlist while already in one
    if (currentWaitlist) {
      if (window.confirm(`You are currently in the waitlist for ${currentWaitlist}. Would you like to leave that waitlist and join ${hospital.SV_NAME}?`)) {
        // Leave current waitlist
        const currentHospital = hospitals.find(h => h.SV_NAME === currentWaitlist);
        if (currentHospital) {
          waitlistStore.updateHospitalWaitlist(
              currentWaitlist,
              Math.max(0, currentHospital.currentWaitlist - 1),
              currentHospital.estimatedWaitTime
          );
        }
      } else {
        return; // User cancelled
      }
    }

    // Join new waitlist
    const newWaitlistCount = hospital.currentWaitlist + 1;
    waitlistStore.updateHospitalWaitlist(hospital.SV_NAME, newWaitlistCount, hospital.estimatedWaitTime);
    waitlistStore.setPosition(newWaitlistCount);
    setCurrentWaitlist(hospital.SV_NAME);
    alert(`You have joined the waitlist for ${hospital.SV_NAME}`);
  };

  const formatPhoneNumber = (phoneNumberString) => {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phoneNumberString;
  };

  const getDirections = (hospitalLat, hospitalLng) => {
    fetch(
        `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(searchAddress)}&lang=en&limit=5&filter=countrycode:us,ca&apiKey=${GEOAPIFY_API_KEY}`
    )
        .then(response => response.json())
        .then(data => {
          if (data.features && data.features.length > 0) {
            const coords = data.features[0].geometry.coordinates;
            const directionsUrl = `https://www.google.com/maps/dir/${coords[1]},${coords[0]}/${hospitalLat},${hospitalLng}`;
            window.open(directionsUrl, '_blank');
          }
        })
        .catch(error => {
          console.error('Error getting directions:', error);
          alert('Unable to get directions. Please try again.');
        });
  };

  return (
      <div className="container max-w-4xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Find the Nearest Hospitals</h1>

        <div className="search-section bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="flex gap-2 mb-4">
            <div className="flex-1">
              <GeoapifyContext apiKey={GEOAPIFY_API_KEY}>
                <GeoapifyGeocoderAutocomplete
                    placeholder="Enter an address"
                    value={searchAddress}
                    limit={5}
                    placeSelect={(place) => {
                      if (place) {
                        setSearchAddress(place.properties.formatted);
                      }
                    }}
                    ref={geocoderRef}
                />
              </GeoapifyContext>
            </div>
            <button
                className="location-btn p-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
                onClick={handleGetLocation}
                disabled={isLoading}
            >
              <MapPin className="h-6 w-6"/>
            </button>
          </div>

          <button
              className="search-btn w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 disabled:bg-green-300"
              onClick={handleSearch}
              disabled={isLoading || !searchAddress}
          >
            {isLoading ? 'Searching...' : 'Search Nearby Hospitals'}
          </button>
        </div>

        <div className="hospital-list space-y-4">
          {hospitals.map((hospital) => (
              <div key={hospital.SV_NAME} className="hospital-card bg-white rounded-lg shadow-md p-4">
                <h3 className="text-xl font-semibold mb-2">{hospital.SV_NAME}</h3>
                <p className="mb-2">
                  <strong>Address:</strong> {hospital.STREET_NUMBER} {hospital.STREET_NAME} {hospital.STREET_TYPE},{' '}
                  {hospital.CITY}, {hospital.PROVINCE}, {hospital.POSTAL_CODE}
                </p>
                <p className="mb-2">
                  <strong>Phone:</strong> {formatPhoneNumber(hospital.PHONE_NUMBER)}
                </p>
                <p className="mb-2">
                  <strong>Wheelchair Accessible:</strong> {hospital.WHEELCHAIR_ACCESSIBLE === 'Y' ? 'Yes' : 'No'}
                </p>
                <p className="mb-2">
                  <strong>Distance:</strong> {hospital.distance ? hospital.distance.toFixed(2) : 'N/A'} km
                </p>
                <div className="waitlist-info mb-2">
                  Current Waitlist: <span className="font-semibold">{hospital.currentWaitlist || 0}</span> people
                </div>
                <div className="waitlist-info mb-4">
                  Estimated Wait Time: <span className="font-semibold">{hospital.estimatedWaitTime || "0:00"}</span>
                </div>
                <div className="action-buttons grid grid-cols-2 md:grid-cols-4 gap-2">
                  <button
                      className="action-btn flex items-center justify-center gap-1 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      onClick={() => getDirections(hospital.LATITUDE, hospital.LONGITUDE)}
                  >
                    <span className="material-icons">directions</span> Directions
                  </button>
                  <button
                      className={`action-btn flex items-center justify-center gap-1 p-2 ${
                          currentWaitlist === hospital.SV_NAME
                              ? 'bg-red-500 hover:bg-red-600'
                              : 'bg-green-500 hover:bg-green-600'
                      } text-white rounded`}
                      onClick={() => handleWaitlistAction(hospital)}
                  >
                    <span className="material-icons">
                      {currentWaitlist === hospital.SV_NAME ? 'remove' : 'add'}
                    </span>
                    {currentWaitlist === hospital.SV_NAME ? 'Leave Waitlist' : 'Join Waitlist'}
                  </button>
                  <button
                      className="action-btn flex items-center justify-center gap-1 p-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
                      onClick={() => window.open(`tel:${hospital.PHONE_NUMBER}`, '_blank')}
                  >
                    <span className="material-icons">phone</span> Call
                  </button>
                  <button
                      className="action-btn flex items-center justify-center gap-1 p-2 bg-purple-500 text-white rounded hover:bg-purple-600"
                      onClick={() => window.open(hospital.WEBSITE, '_blank')}
                  >
                    <span className="material-icons">web</span> Website
                  </button>
                </div>
              </div>
          ))}
        </div>
      </div>
  );
};

export default BrowseEDs;