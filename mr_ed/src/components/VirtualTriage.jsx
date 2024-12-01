import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Page to show results of the virtual triage.
const VirtualTriage = () => {
    const location = useLocation();
    const responses = location.state?.responses || {}; // Retrieve responses from the survey
    const [shouldGoToED, setShouldGoToED] = useState(true); // Default to true

    useEffect(() => {
        // Update shouldGoToED based on severity and duration of symptoms
        const severity = responses.severity;
        const symptomDuration = responses.symptomDuration;

        if ((severity === 'low' || severity === 'medium') &&
            (symptomDuration === 'less-than-1-hour' ||
                symptomDuration === 'between-1-and-8-hours' ||
                symptomDuration === 'between-8-and-24-hours')) {
            setShouldGoToED(false);
        }
    }, [responses]);

    return (
        <div className="survey-container">
            <h1>Virtual Triage Results</h1>

            {shouldGoToED ? (
                <p style={{ color: 'red' }}>
                    Based on your symptoms, you should visit the Emergency Department.
                    <br /> <br />
                    Please click the button below to find nearby hospitals and enter their waitlists.
                </p>
            ) : (
                <p style={{ color: 'green' }}>
                    It seems you do not need to visit the Emergency Department at this time.
                    <br /> <br />
                    If you would still like to, please click the button below to find nearby hospitals and enter their waitlists.
                </p>
            )}

            <Link className="home-screen-buttons" to="/BrowseEDs">Browse Nearby Hospitals</Link>
            <Link className="home-screen-buttons" to="/VirtualTriageSurvey">Return to Survey</Link>
        </div>
    );
};

export default VirtualTriage;
