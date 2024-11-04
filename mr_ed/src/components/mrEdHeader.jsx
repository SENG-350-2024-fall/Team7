import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';
import { waitlistStore } from '../services/WaitlistStore';

const MrEdHeader = ({ setIsLoggedIn, isLoggedIn }) => {
  const [position, setPosition] = useState(null);
  const history = useHistory();
  const { user, logoutUser } = useAuth();

  useEffect(() => {
    // Subscribe to waitlist updates with correct data structure
    const unsubscribe = waitlistStore.subscribe(({ position }) => {
      setPosition(position);
    });

    return () => unsubscribe();
  }, []);

  const handleBypassLogin = () => {
    logoutUser();
    history.push('/');
    setIsLoggedIn(false);
  };

  return (
      <div className="header-container">
        <div className="header-left">
          <Link className="header-button name-button" to="/">Mister Ed</Link>
        </div>
        <div className="header-right">
          <button className="header-button waitlist-button">
            Waitlist Position: {position ?? "N/A"}
          </button>
          <button className="header-button log-out-button" onClick={handleBypassLogin}>
            Log Out
          </button>
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