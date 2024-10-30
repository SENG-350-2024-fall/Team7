import MrEdHeader from './components/mrEdHeader';
import HomeScreen from './components/Home';
import Footer from './components/Footer';
import { useState } from 'react';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyAccount from './components/MyAccount';
import VirtualTriage from './components/VirtualTriage';
import VirtualTriageSurvey from './components/VirtualTriageSurvey';
import BrowseEDs from './components/BrowseEDs';
import CreateAccount from './components/CreateAccount';
import { AuthProvider, useAuth } from './utils/AuthContext';
import TriageReview from './components/TriageReview';
import AdminUserView from './components/AdminUserView';
import BrowseUsers from './components/BrowseUsers';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(useAuth() ? true : false);
  const [userType, setUserType] = useState('');
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          {!isLoggedIn && <div className="LoggedOut">
            <Switch>
              <Route exact path="/">
                <LoginPage setIsLoggedIn={setIsLoggedIn} setUserType={setUserType}/>
              </Route>
              <Route exact path="/CreateAccount">
                < CreateAccount setIsLoggedIn={setIsLoggedIn}/>
              </Route>
            </Switch>
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
                <TriageReview />
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
              <Route path="/MyAccount">
                <MyAccount />
              </Route>
              <Route path="/BrowseUsers">
                <BrowseUsers />
              </Route>
              <Route path="/AdminUserView">
                <AdminUserView />
              </Route>
            </Switch>
            <Footer />
          </div>}
          {isLoggedIn && userType === "caller" && <div className="LoggedIn">
            <MrEdHeader setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />
            <Switch>
              <Route exact path="/">
                <HomeScreen />
              </Route>
              <Route path="/MyAccount">
                <MyAccount />
              </Route>
            </Switch>
            <Footer />
          </div>}
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
