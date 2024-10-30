import React, { useState, useEffect } from 'react';

const AdminUserView = ({ userId }) => {
    const [userData, setUserData] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        // Fetch user data when component mounts
        const fetchUserData = async () => {
            try {
                const response = await fetch(`/api/users/${userId}`);
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, [userId]);

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        try {
            await fetch(`/api/users/${userId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userData),
            });
            setIsEditing(false);
        } catch (error) {
            console.error("Error saving user data:", error);
        }
    };

    return (
        <div className="admin-user-view">
            <h2>User Profile</h2>
            <div>
                <label>Name:</label>
                {isEditing ? (
                    <input 
                        type="text" 
                        name="name" 
                        value={userData.name || ''} 
                        onChange={handleInputChange} 
                    />
                ) : (
                    <p>{userData.name}</p>
                )}
            </div>
            <div>
                <label>Email:</label>
                {isEditing ? (
                    <input 
                        type="email" 
                        name="email" 
                        value={userData.email || ''} 
                        onChange={handleInputChange} 
                    />
                ) : (
                    <p>{userData.email}</p>
                )}
            </div>
            {/* Dropdown for Access Level */}
            <div>
                <label>Access Level:</label>
                {isEditing ? (
                    <select 
                        name="accessLevel" 
                        value={userData.accessLevel || ''} 
                        onChange={handleInputChange}
                    >
                        <option value="Standard User">Standard User</option>
                        <option value="Admin">Admin</option>
                        <option value="Super Admin">Super Admin</option>
                    </select>
                ) : (
                    <p>{userData.accessLevel || 'Standard User'}</p>
                )}
            </div>
            <button onClick={handleEditToggle}>
                {isEditing ? 'Cancel' : 'Edit'}
            </button>
            {isEditing && <button onClick={handleSave}>Save</button>}
        </div>
    );
};

export default AdminUserView;
