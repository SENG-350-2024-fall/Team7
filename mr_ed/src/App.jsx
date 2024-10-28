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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(useAuth() ? true : false);
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          {!isLoggedIn && <div className="LoggedOut">
            <Switch>
              <Route exact path="/">
                <LoginPage setIsLoggedIn={setIsLoggedIn} />
              </Route>
              <Route exact path="/CreateAccount">
                < CreateAccount setIsLoggedIn={setIsLoggedIn}/>
              </Route>
            </Switch>
            <Footer />
          </div>}
          {isLoggedIn && <div className="LoggedIn">
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
              <Route path="/TriageReview">
                <TriageReview />
              </Route>
              <Route path="/BrowseEDs">
                <BrowseEDs />
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
