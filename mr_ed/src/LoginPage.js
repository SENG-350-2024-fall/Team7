import React from 'react';

const LoginPage = ({ setIsLoggedIn }) => {
    const handleBypassLogin = () => {
        setIsLoggedIn(true);
    };

    return (
        <div>
            <h1>Login Page</h1>
            <button onClick={handleBypassLogin}>Bypass Login</button>
        </div>
    );
};

export default LoginPage;