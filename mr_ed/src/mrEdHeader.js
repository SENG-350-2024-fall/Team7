import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MrEdHeader = ({ setIsLoggedIn, isLoggedIn}) => {
  const [position, setPosition] = useState(0);

  const changePosition = () => {
    // fetch('http://localhost:3000/position')
    // .then(response => response.json())
    // .then(data => setPosition(data.position))
    setPosition(position + 1);
  }

  const handleBypassLogin = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="header-container">
      <div className="header-left">
        <Link className="header-button name-button" to="/">Mister Ed</Link>
      </div>
      <div className="header-right">
        <button className="header-button waitlist-button" onClick={changePosition}>Waitlist Position: {position ? position : "N/A"}</button>
        <button className="header-button log-out-button" onClick={handleBypassLogin}>Log Out</button>
        <Link className="header-button icon-button" to="/MyAccount">
          <i className="fas fa-user-circle"></i>
        </Link>
        <Link className="header-button home-button" to="/">
          <i className="fas fa-home"></i>
        </Link>
      </div>
    </div>
  );
};

<<<<<<< HEAD
    const handleLogout = () => {
        setIsLoggedIn(false);
    };
    return (
      <switch>
        {isLoggedIn? (
          <div className="header-container">
            <div className="header-left">
              <Link className="header-button name-button" to="/">Mister Ed</Link>
            </div>
            <div className="header-right">
              <button className="header-button waitlist-button" onClick={changePosition}>Waitlist Position: {position ? position : "N/A"}</button>
              <button className="header-button log-out-button" onClick={handleLogout}>Log Out</button>
              <Link className="header-button icon-button" to="/MyAccount">
                <i className="fas fa-user-circle"></i>
              </Link>
              <Link className="header-button home-button" to="/">
                <i className="fas fa-home"></i>
              </Link>
            </div>
          </div>
        ) : (
          <div className="header-container">
            <div className="header-left">
              <label className="header-button name-button">Mister Ed</label>
            </div>
            <div className="header-right">
            </div>
          </div>
        )}
        </switch>
      );
    };
 
=======
>>>>>>> e334aa429eec7c87a2c19cb935caafbb0041cdd1
export default MrEdHeader;