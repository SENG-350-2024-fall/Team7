import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Page to show results of the virtual triage.
const VirtualTriage = () => {
    const [shouldGoToED, setShouldGoToED] = useState(true); // Change to false if needed


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

            <Link className="home-screen-buttons" to="/BrowseEDs">Browse Nearby Hospital's </Link>
        </div>
    );
};

export default VirtualTriage;
