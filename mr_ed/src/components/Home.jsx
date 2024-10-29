import React from 'react';
import { Link } from 'react-router-dom';

const HomeScreen = () => {
  return (
    <div className="home-container">
      <Link className="home-screen-buttons" to="/BrowseEDs">Browse EDs</Link>
      <Link className="home-screen-buttons" to="/VirtualTriageSurvey">Start Virtual Triage</Link>

      {/* for testing med staff triage view,  should move later */}
      <Link className="home-screen-buttons" to="/TriageReview">Medical Staff Triage View</Link>
      {/* for testing admin staff user view */}
      <Link className="home-screen-buttons" to="/AdminUserView">Admin User View</Link>
    </div>
  );
};

export default HomeScreen;
