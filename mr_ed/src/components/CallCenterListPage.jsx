import React from 'react';
import { Link } from 'react-router-dom';

const CallCenterListPage = () => {
    const mockPatients = [
        {
            id: 1,
            name: "John Doe",
            age: 45,
            timeOfTriage: "2024-10-31T08:30:00",
        },
        {
            id: 2,
            name: "Sarah Smith",
            age: 28,
            timeOfTriage: "2024-10-31T09:15:00",
        },
    ];


    return (
        <div className="triage-review-list-container">
            <h2>Patient Triage Review List</h2>
            <div className="patient-list">
                {mockPatients.map((patient) => (
                    <div key={patient.id} className="patient-card">
                        <h3>{patient.name}</h3>
                        <p><strong>Age:</strong> {patient.age}</p>
                        <p><strong>Triage Time:</strong> {new Date(patient.timeOfTriage).toLocaleString()}</p>
                        <Link to={`/callpatient/${patient.id}`} className="view-button">
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CallCenterListPage;
