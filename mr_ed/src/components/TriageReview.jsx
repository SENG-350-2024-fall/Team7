import React, { useState, useEffect } from 'react';

// state pattern (can't use interface unless we convert this to a tsx file)
class AssignedState {
    constructor(setCurrentState) {
        this.setCurrentState = setCurrentState;
    }

    toggleAssign() {
        this.setCurrentState(new UnassignedState(this.setCurrentState));
    }

    canViewMedicalInfo() {
        return true;
    }

    canSubmitRecommendation() {
        return true;
    }

    getAssignButtonText() {
        return "Unassign Myself";
    }
}

class UnassignedState {
    constructor(setCurrentState) {
        this.setCurrentState = setCurrentState;
    }

    toggleAssign() {
        this.setCurrentState(new AssignedState(this.setCurrentState));
    }

    canViewMedicalInfo() {
        return false;
    }

    canSubmitRecommendation() {
        return false;
    }

    getAssignButtonText() {
        return "Assign to Myself";
    }
}

// Triage Review Component
const TriageReview = () => {
    const [currentState, setCurrentState] = useState(null);
    const [showFullMedicalInfo, setShowFullMedicalInfo] = useState(false);
    const [recommendation, setRecommendation] = useState('');

    // Set initial state
    useEffect(() => {
        setCurrentState(new UnassignedState(setCurrentState));
    }, []);

    // Hardcoded for now
    const surveyInfo = {
        symptomType: 'Cough',
        affectedArea: 'Chest',
        symptomDuration: 'More than 24 hours',
        severity: 'High',
    };

    const medicalInfoPreview = {
        name: 'John Doe',
        age: 45,
        medicalConditions: 'Hypertension, Diabetes',
        allergies: 'Penicillin',
        lastVisit: '2024-08-10',
        medications: 'Benazepril, Insulin',
    };

    const handleShowMore = () => {
        setShowFullMedicalInfo((prevState) => !prevState);
    };

    const handleRecommendationChange = (event) => {
        setRecommendation(event.target.value);
    };

    const handleSubmitRecommendation = () => {
        alert(`Recommendation sent to patient: ${recommendation}`);
        setRecommendation('');
    };

    // Ensure currentState is initialized before rendering
    if (!currentState) return null; 

    return (
        <div className="triage-review-container">
            <h2>Patient Triage Information</h2>

            {/* Assign Button */}
            <div className="centered-content">
                <div className="assign-section">
                    <button 
                        onClick={() => currentState.toggleAssign()} 
                        className={currentState instanceof AssignedState ? "assign-button" : "unassign-button"}
                    >
                        {currentState.getAssignButtonText()}
                    </button>
                </div>

                {/* Survey Information */}
                <div className="survey-info">
                    <h3>Survey Information</h3>
                    <ul>
                        <li><strong>Symptom Type:</strong> {surveyInfo.symptomType}</li>
                        <li><strong>Affected Area:</strong> {surveyInfo.affectedArea}</li>
                        <li><strong>Symptom Duration:</strong> {surveyInfo.symptomDuration}</li>
                        <li><strong>Severity:</strong> {surveyInfo.severity}</li>
                    </ul>
                </div>
            </div>

            {/* Patient Medical Information */}
            <div className="medical-info med-history-box">
                <h3>Patient Medical Information</h3>
                <div className="medical-info-preview">
                    {currentState.canViewMedicalInfo() ? (
                        <ul>
                            <li><strong>Name:</strong> {medicalInfoPreview.name}</li>
                            <li><strong>Age:</strong> {medicalInfoPreview.age}</li>
                            <li><strong>Medical Conditions:</strong> {medicalInfoPreview.medicalConditions}</li>
                            <li><strong>Allergies:</strong> {medicalInfoPreview.allergies}</li>
                            {showFullMedicalInfo && (
                                <>
                                    <li><strong>Last Visit:</strong> {medicalInfoPreview.lastVisit}</li>
                                    <li><strong>Medications:</strong> {medicalInfoPreview.medications}</li>
                                </>
                            )}
                        </ul>
                    ) : (
                        <p>Medical information is hidden until assigned.</p>
                    )}
                    {currentState.canViewMedicalInfo() && (
                        <button onClick={handleShowMore} className="show-more-button">
                            {showFullMedicalInfo ? "Show Less" : "Show More"}
                        </button>
                    )}
                </div>
            </div>

            {/* Recommendation Section */}
            <div className="recommendation-box">
                <h3>Recommendation</h3>
                <select
                    value={recommendation}
                    onChange={handleRecommendationChange}
                    className="recommendation-dropdown"
                    disabled={!currentState.canSubmitRecommendation()}
                >
                    <option value="">Select a recommendation</option>
                    <option value="Stay home">Stay home</option>
                    <option value="Go to ED">Go to ED</option>
                    <option value="Call 911">Call 911</option>
                    <option value="See a General Practitioner">See a General Practitioner</option>
                </select>
                <button 
                    onClick={handleSubmitRecommendation} 
                    className="submit-button"
                    disabled={!currentState.canSubmitRecommendation() || !recommendation}
                >
                    Submit to Patient
                </button>
            </div>

            {/* Refresh Button */}
            <div className="refresh-section">
                <button 
                    onClick={() => window.location.reload()} 
                    className="refresh-button"
                >
                    Refresh Page
                </button>
            </div>
        </div>
    );
};

export default TriageReview;
