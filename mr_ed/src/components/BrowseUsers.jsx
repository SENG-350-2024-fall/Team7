import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Patient, Admin, MedicalStaff, Caller } from '../actions/Users';

const BrowseUsers = () => {
    const [searchInput, setSearchInput] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [avgLoginTime, setAvgLoginTime] = useState(null);

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


    // Search function to filter users based on partial matches in username or name
    const handleSearch = () => {
        if (users) {
            const searchTerm = searchInput.toLowerCase();
            const results = users.filter((user, i) =>
                users[i].username.toLowerCase().includes(searchTerm) ||
                users[i].name.toLowerCase().includes(searchTerm)
            );
            setFilteredUsers(results);
        }
    };

    useEffect(() => {
        const fetchAvgLoginTime = () => {
            const avgLoginTimeFromStorage = sessionStorage.getItem('avgLoginTime');
            setAvgLoginTime(avgLoginTimeFromStorage);
        };

        // Fetch initially when the component mounts
        fetchAvgLoginTime();
        const intervalId = setInterval(fetchAvgLoginTime, 5000); // Update every 5000ms
        // Clean up the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);


    return (
        <div className="browse-users-wrapper">
            <div className="browse-users-metrics-container">
                <h1 className="browse-users-title">System Metrics</h1>
                {/* Display average login time */}
                <div style={{ margin: '20px 0' }}>
                    <strong>Average Time to Login:</strong> {avgLoginTime ? avgLoginTime + " ms" : "Calculating..."}
                </div>
            </div>
            <div className="browse-users-container">
                <h1 className="browse-users-title">Browse Users</h1>
                <div style={{ margin: '20px 0' }}>
                    <label>
                        Search:
                        <input
                            type="search"
                            placeholder="Search by username or name"
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            style={{ marginLeft: '10px', padding: '5px', width: '250px' }}
                        />
                    </label>
                    <button onClick={handleSearch} style={{ marginLeft: '10px', padding: '5px 10px' }}>Search</button>
                </div>


                {/* Display the table if there are filtered results */}
                {filteredUsers.length > 0 ? (
                    <table style={{ marginTop: '20px', width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Birthdate</th>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Email</th>
                                <th style={{ border: '1px solid #ddd', padding: '8px' }}>Phone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.map((user, index) => (
                                users && <tr key={index}>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.name}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.birthdate}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.email}</td>
                                    <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.phoneNumber}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    searchInput && <p style={{ marginTop: '20px', color: 'red' }}>User not found</p>
                )}
                <div style={{ margin: '20px 0' }}></div>

                <Link className="home-screen-buttons" to="/CreateNewUser">Create New User</Link>
            </div>
        </div>
    );
};

export default BrowseUsers;
