import React from 'react';
import { useLocation, Link, useHistory } from 'react-router-dom';
import { usePatients } from './PatientContext';

const CallPage = () => {
    const location = useLocation();
    const history = useHistory();
    const { updateWaitlistStatus } = usePatients();
    const patient = location.state?.patient;

    if (!patient) {
        return <p>Patient not found</p>;
    }

    const handleConfirmWithED = () => {
        alert(`Confirmed that patient ${patient.name} is going to the ED.`);
    };

    const handleRemoveFromWaitlist = () => {
        const confirmRemoval = window.confirm(`Are you sure you want to remove ${patient.name} from the ED waitlist?`);
        if (confirmRemoval) {
            updateWaitlistStatus(patient.id); // Update state in the context
            alert(`${patient.name} has been removed from the ED waitlist.`);
            history.push("/"); // Redirect to the patient list
        }
    };

    const handleCallPatient = () => {
        alert(`Calling ${patient.name} at ${patient.phoneNumber}...`);
    };

    return (
        <div className="triage-review-list-container">
            <h2>Patient Call Page</h2>
            <div className="patient-list">
                <p><strong>Name:</strong> {patient.name}</p>
                <p><strong>Phone:</strong> {patient.phoneNumber}</p>
                <p><strong>Priority:</strong> {patient.priority}</p>
            </div>
            <div className="patient-list">
                <button className="view-button" onClick={handleConfirmWithED}>Confirm with ED</button>
                <button className="view-button" onClick={handleRemoveFromWaitlist}>Remove from Waitlist</button>
                <button className="view-button" onClick={handleCallPatient}>Call Patient</button>
            </div>
            <Link to="/" className="view-button">Back to Patient List</Link>
        </div>
    );
};

export default CallPage;
