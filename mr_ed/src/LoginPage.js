import React from 'react';

const LoginPage = ({ setIsLoggedIn }) => {
    const handleLogin = () => {
        setIsLoggedIn(true);
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
                <button className="login-screen-buttons" onClick={handleLogin} >Login</button>
                <button className="login-screen-buttons">Forgot Password?</button>
                <button className="login-screen-buttons">Create Account</button>            
        </div>
    );
};

export default LoginPage;