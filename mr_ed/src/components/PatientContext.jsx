import React, { createContext, useState, useContext, useEffect } from 'react';

const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
    const [patients, setPatients] = useState(null);
    useEffect(() => {
        fetch("http://localhost:8000/users")
        .then(res => {
           return res.json()
        })
        .then((data) => {
            setPatients(data);
        })
    }, []);

    const updateWaitlistStatus = (id) => {
        setPatients((prevPatients) =>
            prevPatients.map((patient) =>
                patient.id === id ? { ...patient, onWaitlist: false } : patient
            )
        );
    };

    return (
        patients && <PatientContext.Provider value={{ patients, updateWaitlistStatus }}>
            {children}
        </PatientContext.Provider>
    );
};

export const usePatients = () => useContext(PatientContext);
