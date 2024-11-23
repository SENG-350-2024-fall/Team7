import React from 'react';
import { Link } from 'react-router-dom';
import { usePatients } from './PatientContext';

const CallCenterListPage = () => {
    const { patients } = usePatients();

    return (
        <div className="triage-review-list-container">
            <h2>Patient Triage Review List</h2>
            <div className="patient-list">
                {patients
                    .filter((patient) => patient.onWaitlist)
                    .map((patient) => (
                        <div key={patient.id} className="patient-card">
                            <h3>{patient.name}</h3>
                            <p><strong>Age:</strong> {patient.age}</p>
                            <p><strong>Triage Time:</strong> {new Date(patient.timeOfTriage).toLocaleString()}</p>
                            <Link
                                to={{
                                    pathname: `/callpatient/${patient.id}`,
                                    state: { patient },
                                }}
                                className="view-button"
                            >
                                View Details
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default CallCenterListPage;
