import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const TriageReviewListPage = () => {
    const [users, setUsers] = useState(null);
    useEffect(() => {
        fetch("http://localhost:8000/users")
        .then(res => {
           return res.json()
        })
        .then((data) => {
            setUsers(data);
        })
    }, []);
    const mockPatients = users;


    return (
        <div className="triage-review-list-container">
            <h2>Patient Triage Review List</h2>
            {users && <div className="patient-list">
                {mockPatients.map((patient) => (
                    <div key={patient.id} className="patient-card">
                        <h3>{patient.name}</h3>
                        <p><strong>Age:</strong> {patient.age}</p>
                        <p><strong>Triage Time:</strong> {new Date(patient.timeOfTriage).toLocaleString()}</p>
                        <p><strong>Symptom Type:</strong> {patient.symptomType}</p>
                        <p><strong>Severity:</strong> {patient.severity}</p>
                        <Link to={`/patient/${patient.id}`} className="view-button">
                            View Details
                        </Link>
                    </div>
                ))}
            </div>}
        </div>
    );
};

export default TriageReviewListPage;
