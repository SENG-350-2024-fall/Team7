import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BrowseUsers = () => {
    const [searchInput, setSearchInput] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    // Hardcoded average login time value
    const averageLoginTime = "2.3 seconds";

    // Hardcoded user data array
    const users = [
        {
            username: "johndoe",
            name: "John Doe",
            birthdate: "1990-01-01",
            email: "johndoe@example.com",
            phone: "123-456-7890"
        },
        {
            username: "janedoe",
            name: "Jane Doe",
            birthdate: "1992-02-02",
            email: "janedoe@example.com",
            phone: "987-654-3210"
        },
        {
            username: "richardsmith",
            name: "Richard Smith",
            birthdate: "1985-05-15",
            email: "richardsmith@example.com",
            phone: "555-789-1234"
        }
    ];

    // Search function to filter users based on partial matches in username or name
    const handleSearch = () => {
        const searchTerm = searchInput.toLowerCase();
        const results = users.filter(user =>
            user.username.toLowerCase().includes(searchTerm) ||
            user.name.toLowerCase().includes(searchTerm)
        );
        setFilteredUsers(results);
    };

    return (
        <div className="browse-users-wrapper">
        <div className="browse-users-metrics-container">
            <h1 className="browse-users-title">System Metrics</h1>
            {/* Display average login time */}
            <div style={{ margin: '20px 0' }}>
                <strong>Average Time to Login:</strong> {averageLoginTime}
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
                        style={{ marginLeft: '10px', padding: '5px', width: '250px'}}
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
                            <tr key={index}>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.name}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.birthdate}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.email}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.phone}</td>
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
