import React from 'react';
import { Link } from 'react-router-dom';

const VirtualTriageSurvey = () => {
    return (
        <div className="survey-container">
            <h2>Symptom Questionnaire</h2>
            <div className="form-grouping">
                <label className="form-group-label" htmlFor="symptom-type">Symptom Type:</label>
                <select className="survey-dropdown">
                    <option value="chest-pain">Bruising</option>
                    <option value="sore-throat">Sore Throat</option>
                    <option value="cough">Cough</option>
                    <option value="sharp-pain">Sharp Pain</option>
                </select>
            </div>
            <div className="form-grouping">
                <label className="form-group-label" htmlFor="symptom-type">Affected Area:</label>
                <select className="survey-dropdown">
                    <option value="chest">Chest</option>
                    <option value="legs">Legs</option>
                    <option value="neck">Neck</option>
                    <option value="face">Face</option>
                    <option value="arm">Arm</option>
                </select>
            </div>
            <div className="form-grouping">
                <label className="form-group-label" htmlFor="symptom-duration">Duration of Symptoms:</label>
                <select className="survey-dropdown">
                    <option value="less-than-1-hour">Less than 1 hour</option>
                    <option value="between-1-and-8-hours">Between 1 and 8 hours</option>
                    <option value="between-8-and-24-hours">Between 8 and 24 hours</option>
                    <option value="more-than-24-hours">More than 24 hours</option>
                </select>
            </div>
            <div className="form-grouping">
                <label className="form-group-label" htmlFor="symptom-type">Severity:</label>
                <select className="survey-dropdown">
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                    <option value="extreme">Extreme</option>
                </select>
            </div>
            <Link className="home-screen-buttons" to="/VirtualTriage">Submit Survey</Link>
        </div>
    );
};

export default VirtualTriageSurvey;