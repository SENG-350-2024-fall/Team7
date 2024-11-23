import React, { createContext, useState, useContext } from 'react';

const PatientContext = createContext();

export const PatientProvider = ({ children }) => {
    const [patients, setPatients] = useState([
        {
            id: 1,
            name: "John Doe",
            age: 45,
            timeOfTriage: "2024-10-31T08:30:00",
            phoneNumber: "778-456-7890",
            priority: "High",
            onWaitlist: true,
        },
        {
            id: 2,
            name: "Sarah Smith",
            age: 28,
            timeOfTriage: "2024-10-31T09:15:00",
            phoneNumber: "250-654-3210",
            priority: "Medium",
            onWaitlist: true,
        },
        {
            id: 3,
            name: "Michael Johnson",
            age: 32,
            timeOfTriage: "2024-10-31T10:45:00",
            phoneNumber: "604-987-6543",
            priority: "Low",
            onWaitlist: true,
        },
        {
            id: 4,
            name: "Emily Davis",
            age: 51,
            timeOfTriage: "2024-10-31T11:00:00",
            phoneNumber: "778-123-4567",
            priority: "High",
            onWaitlist: true,
        },
        {
            id: 5,
            name: "David Brown",
            age: 65,
            timeOfTriage: "2024-10-31T11:30:00",
            phoneNumber: "250-567-8901",
            priority: "High",
            onWaitlist: true,
        },
        {
            id: 6,
            name: "Jessica Wilson",
            age: 37,
            timeOfTriage: "2024-10-31T12:15:00",
            phoneNumber: "604-765-4321",
            priority: "Medium",
            onWaitlist: true,
        },
        {
            id: 7,
            name: "Matthew Thompson",
            age: 29,
            timeOfTriage: "2024-10-31T13:00:00",
            phoneNumber: "778-234-5678",
            priority: "Low",
            onWaitlist: true,
        },
        {
            id: 8,
            name: "Olivia Martinez",
            age: 42,
            timeOfTriage: "2024-10-31T13:45:00",
            phoneNumber: "250-678-9012",
            priority: "High",
            onWaitlist: true,
        },
        {
            id: 9,
            name: "Daniel Garcia",
            age: 54,
            timeOfTriage: "2024-10-31T14:30:00",
            phoneNumber: "604-876-5432",
            priority: "Medium",
            onWaitlist: true,
        },
        {
            id: 10,
            name: "Sophia Hernandez",
            age: 39,
            timeOfTriage: "2024-10-31T15:15:00",
            phoneNumber: "778-345-6789",
            priority: "Low",
            onWaitlist: true,
        }
        
    ]);

    const updateWaitlistStatus = (id) => {
        setPatients((prevPatients) =>
            prevPatients.map((patient) =>
                patient.id === id ? { ...patient, onWaitlist: false } : patient
            )
        );
    };

    return (
        <PatientContext.Provider value={{ patients, updateWaitlistStatus }}>
            {children}
        </PatientContext.Provider>
    );
};

export const usePatients = () => useContext(PatientContext);
