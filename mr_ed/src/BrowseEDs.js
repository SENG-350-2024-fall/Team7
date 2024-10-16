import React, { useState } from 'react';
import Papa from 'papaparse';
import 'material-design-icons/iconfont/material-icons.css';


const csvUrl = '/data/hlbc_hospitals.csv'; // CSV file location

const BrowseEDs = () => {
  const [hospitals, setHospitals] = useState([]);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  // Function to get the distance between two points using latitude/longitude
  const getDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
  };

  // Function to parse the CSV and calculate distances
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      console.log("Getting location");
      navigator.geolocation.getCurrentPosition(success, error);
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const success = (position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    setLatitude(lat);
    setLongitude(lon);
    console.log("Parsing csv");
    Papa.parse(csvUrl, {
      download: true,
      header: true,
      complete: (result) => {
        const hospitalsData = result.data;

        hospitalsData.forEach((hospital) => {

          hospital.distance = getDistance(lat, lon, hospital.LATITUDE, hospital.LONGITUDE);
        });

        const sortedHospitals = hospitalsData.sort((a, b) => a.distance - b.distance).slice(0, 10);
        setHospitals(sortedHospitals);
      },
    });
  };

  const error = () => {
    alert('Unable to retrieve your location');
  };

  // Function to format phone numbers
  const formatPhoneNumber = (phoneNumberString) => {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return phoneNumberString;
  };

  // Function to simulate joining waitlist
  const joinWaitlist = (hospitalName) => {
    alert(`You have joined the waitlist for ${hospitalName}`);
  };

  // Function to get Google Map directions
  const getDirections = (hospitalLat, hospitalLng) => {
    const directionsUrl = `https://www.google.com/maps/dir/${latitude},${longitude}/${hospitalLat},${hospitalLng}`;
    window.open(directionsUrl, '_blank');
  };

  return (
    <div className="container">
      <h1>Find the 10 Nearest Hospitals</h1>
      <button id="get-location-btn" onClick={handleGetLocation}>
        Get Nearest Hospitals
      </button>

      <div id="hospital-list">
        {hospitals.map((hospital) => (
          <div key={hospital.SV_NAME} className="hospital-card">
            <h3>{hospital.SV_NAME}</h3>
            <p>
              <strong>Address:</strong> {hospital.STREET_NUMBER} {hospital.STREET_NAME} {hospital.STREET_TYPE},{' '}
              {hospital.CITY}, {hospital.PROVINCE}, {hospital.POSTAL_CODE}
            </p>
            <p>
              <strong>Phone:</strong> {formatPhoneNumber(hospital.PHONE_NUMBER)}
            </p>
            <p>
              <strong>Wheelchair Accessible:</strong> {hospital.WHEELCHAIR_ACCESSIBLE === 'Y' ? 'Yes' : 'No'}
            </p>
            <p>
              <strong>Distance:</strong> {hospital.distance.toFixed(2)} km
            </p>
            <div className="waitlist-info">
              Current Waitlist: <span>{68}</span> people
            </div>
            <div className="action-buttons">
              <button
                className="action-btn"
                onClick={() => getDirections(hospital.LATITUDE, hospital.LONGITUDE)}
              >
                <span className="material-icons">directions</span> Directions
              </button>
              <button className="action-btn" onClick={() => window.location.href = `tel:${hospital.PHONE_NUMBER}`}>
                <span className="material-icons">phone</span> Call
              </button>
              <button className="action-btn" onClick={() => window.open(hospital.WEBSITE, '_blank')}>
                <span className="material-icons">language</span> Website
              </button>
              <button className="action-btn" onClick={() => joinWaitlist(hospital.SV_NAME)}>
                <span className="material-icons">queue</span> Join Waitlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseEDs;
