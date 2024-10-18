import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div className="home-container">
      <Link className="home-screen-buttons" to="/BrowseEDs">Browse EDs</Link>
      <Link className="home-screen-buttons" to="/VirtualTriageSurvey">Start Virtual Triage</Link>
    </div>
  );
};

export default HomeScreen;
