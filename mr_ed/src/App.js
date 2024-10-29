import MrEdHeader from './mrEdHeader';
import HomeScreen from './Home';
import Footer from './Footer';
import { useState } from 'react';
import LoginPage from './LoginPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyAccount from './MyAccount';
import VirtualTriage from './VirtualTriage';
import VirtualTriageSurvey from './VirtualTriageSurvey';
import BrowseEDs from './BrowseEDs';
import TriageReview from './TriageReview';
import BrowseUsers from './BrowseUsers';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState('');
  console.log("isLoggedIn:", isLoggedIn, "userType:", userType);
  return (
    <Router>
      <div className="App">
        {!isLoggedIn && <div className="LoggedOut">
          <MrEdHeader setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
          <LoginPage setIsLoggedIn={setIsLoggedIn} setUserType={setUserType}/>
          <Footer />
        </div>}
        {isLoggedIn && userType === "patient" && <div className="LoggedIn">
          <MrEdHeader setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
            <Route path="/MyAccount">
              <MyAccount />
            </Route>
            <Route path="/VirtualTriage">
              <VirtualTriage />
            </Route>
            <Route path="/VirtualTriageSurvey">
              <VirtualTriageSurvey />
            </Route>
            <Route path="/BrowseEDs">
              <BrowseEDs />
            </Route>
          </Switch>
          <Footer />
        </div>}
        {isLoggedIn && userType === "medical-staff" && <div className="LoggedIn">
          <MrEdHeader setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
          <Switch>
            <Route exact path="/">
              <TriageReview /> (//Update to medical staff home)
            </Route>
            <Route path="/MyAccount">
              <MyAccount />
            </Route>
            <Route path="/TriageReview">
              <TriageReview />
            </Route>
          </Switch>
          <Footer />
        </div>}
        {isLoggedIn && userType === "admin" && <div className="LoggedIn">
          <MrEdHeader setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
          <Switch>
            <Route exact path="/">
              <BrowseUsers />
            </Route>
            <Route exact path="/BrowseUsers">
              <BrowseUsers />
            </Route>
            <Route path="/MyAccount">
              <MyAccount />
            </Route>
          </Switch>
          <Footer />
        </div>}
        {isLoggedIn && userType === "caller" && <div className="LoggedIn">
          <MrEdHeader setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
          <Switch>
            <Route exact path="/">
              <HomeScreen /> (//Update to Caller home)
            </Route>
            <Route path="/MyAccount">
              <MyAccount />
            </Route>
          </Switch>
          <Footer />
        </div>}
      </div>
    </Router>
  );
}

export default App;
