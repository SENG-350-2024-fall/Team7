import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const VirtualTriageSurvey = () => {
    const [submitted, setSubmitted] = useState(false);
    const [symptomType, setSymptomType] = useState('');
    const [affectedArea, setAffectedArea] = useState('');
    const [symptomDuration, setSymptomDuration] = useState('');
    const [severity, setSeverity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // can add logic here for before redirect happens
        setSubmitted(true);
    };

    if (submitted) {
        return <Redirect to="/VirtualTriage"/>;
    }

    return (
        <div className="survey-container">
            <h2>Symptom Questionnaire</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-grouping">
                    <label htmlFor="symptom-type" className="form-group-label">Symptom Type:</label>
                    <select
                        id="symptom-type"
                        className="survey-dropdown"
                        value={symptomType}
                        onChange={(e) => setSymptomType(e.target.value)}
                    >
                        <option value="">Select a symptom</option>
                        <option value="bruising">Bruising</option>
                        <option value="sore-throat">Sore Throat</option>
                        <option value="cough">Cough</option>
                        <option value="sharp-pain">Sharp Pain</option>
                    </select>
                </div>
                <div className="form-grouping">
                    <label htmlFor="affected-area" className="form-group-label">Affected Area:</label>
                    <select
                        id="affected-area"
                        className="survey-dropdown"
                        value={affectedArea}
                        onChange={(e) => setAffectedArea(e.target.value)}
                    >
                        <option value="">Select an area</option>
                        <option value="chest">Chest</option>
                        <option value="legs">Legs</option>
                        <option value="neck">Neck</option>
                        <option value="face">Face</option>
                        <option value="arm">Arm</option>
                    </select>
                </div>
                <div className="form-grouping">
                    <label htmlFor="symptom-duration" className="form-group-label">Duration of Symptoms:</label>
                    <select
                        id="symptom-duration"
                        className="survey-dropdown"
                        value={symptomDuration}
                        onChange={(e) => setSymptomDuration(e.target.value)}
                    >
                        <option value="">Select duration</option>
                        <option value="less-than-1-hour">Less than 1 hour</option>
                        <option value="between-1-and-8-hours">Between 1 and 8 hours</option>
                        <option value="between-8-and-24-hours">Between 8 and 24 hours</option>
                        <option value="more-than-24-hours">More than 24 hours</option>
                    </select>
                </div>
                <div className="form-grouping">
                    <label htmlFor="severity" className="form-group-label">Severity:</label>
                    <select
                        id="severity"
                        className="survey-dropdown"
                        value={severity}
                        onChange={(e) => setSeverity(e.target.value)}
                    >
                        <option value="">Select severity</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                        <option value="extreme">Extreme</option>
                    </select>
                </div>
                <button type="submit" className="home-screen-buttons">Submit Survey</button>
            </form>
        </div>
    );
};

export default VirtualTriageSurvey;