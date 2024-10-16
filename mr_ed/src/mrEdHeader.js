import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MrEdHeader = ({ setIsLoggedIn }) => {
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

export default MrEdHeader;