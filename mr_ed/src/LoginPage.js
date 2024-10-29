import React, { useState } from 'react';

const LoginPage = ({ setIsLoggedIn, setUserType }) => {
    const [userTypeLogin, setUserTypeLogin] = useState('');
    const handleLogin = () => {
        setIsLoggedIn(true);
        setUserType(userTypeLogin);
    };

    return (
        <div className="login-container">
                <h1 className="login-title-label">Login</h1>
                <div style={{ margin: '20px 0' }}>
                    <label>
                        Email:
                        <input type="email" placeholder="Email" style={{ marginLeft: '10px', padding: '5px' }} />
                    </label>
                </div>
                <div style={{ margin: '20px 0' }}>
                    <label>
                        Password:
                        <input type="password" placeholder="Password" style={{ marginLeft: '10px', padding: '5px' }} />
                    </label>
                </div>
                <form>
                <div style={{ margin: '20px 0' }}>
                    <label htmlFor="user-type" className="form-group-label">User Type:</label>
                    <select
                        id="user-type"
                        className="survey-dropdown"
                        value={userTypeLogin}
                        onChange={(e) => setUserTypeLogin(e.target.value)}>
                        <option value="">Select a type</option>
                        <option value="patient">Patient</option>
                        <option value="medical-staff">Medical Staff</option>
                        <option value="admin">Admin</option>
                        <option value="caller">Caller</option>
                    </select>
                </div>
                </form>
                <button className="login-screen-buttons" onClick={handleLogin} >Login</button>
                <button className="login-screen-buttons">Forgot Password?</button>
                <button className="login-screen-buttons">Create Account</button>            
        </div>
    );
};

export default LoginPage;