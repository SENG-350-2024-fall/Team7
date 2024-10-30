import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';

const LoginPage = ({ setIsLoggedIn, setUserType }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [userTypeLogin, setUserTypeLogin] = useState('');
    const { user, loginUser } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();
        const userInfo = { email, password };
        setUserType(userTypeLogin);
        if(loginUser(userInfo)){
            setIsLoggedIn(true);
        }
    };
    
    return (
        <div className="login-container">
            <h1 className="login-title">Login</h1>
            
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            
            <div className="login-input-group">
                <label>Email:</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="login-input"
                />
            </div>
            <div className="login-input-group">
                <label>Password:</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="login-input"
                />
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
            <button className="login-button" onClick={handleLogin}>
                Login
            </button>
            
            <div className="login-options">
                <button className="forgot-password">Forgot Password?</button>
                <Link className="create-account-link" to="/CreateAccount">
                    Create Account
                </Link>
            </div>
        </div>
    );
};

export default LoginPage;
