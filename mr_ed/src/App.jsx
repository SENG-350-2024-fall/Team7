import MrEdHeader from './components/mrEdHeader';
import HomeScreen from './components/Home';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import LoginPage from './components/LoginPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MyAccount from './components/MyAccount';
import VirtualTriage from './components/VirtualTriage';
import VirtualTriageSurvey from './components/VirtualTriageSurvey';
import BrowseEDs from './components/BrowseEDs';
import CreateAccount from './components/CreateAccount';
import { AuthProvider, useAuth } from './utils/AuthContext';
import TriageReview from './components/TriageReview';
import TriageReviewListPage from "./components/TriageReviewListPage";
import AdminUserView from './components/AdminUserView';
import BrowseUsers from './components/BrowseUsers';
import CreateNewUser from './components/CreateNewUser';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(useAuth() ? true : false);
  const [userType, setUserType] = useState('');
  sessionStorage.setItem('loginTimeTotal', 0);
      sessionStorage.setItem('numberOfLogins', 0);
      sessionStorage.setItem('avgLoginTime', 0);

  useEffect(() => { 
    if (isLoggedIn) { 
      const startTime = sessionStorage.getItem('loginStartTime'); 
      const endTime = performance.now(); 
      const duration = endTime - startTime; 
      console.log(`Load time after login: ${duration} ms`);
      sessionStorage.setItem('loginTimeTotal', sessionStorage.getItem('loginTimeTotal') + duration);
      sessionStorage.setItem('numberOfLogins', sessionStorage.getItem('numberOfLogins') + 1);
      sessionStorage.setItem('avgLoginTime', sessionStorage.getItem('loginTimeTotal')/sessionStorage.getItem('numberOfLogins'));
      console.log(`Avg Login Time: ${sessionStorage.getItem('avgLoginTime')} ms`);
    }

  }, [isLoggedIn]);

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
                <TriageReviewListPage />
              </Route>
              <Route path="/MyAccount">
                <MyAccount />
              </Route>
              <Route path="/TriageReviewListPage">
                <TriageReviewListPage />
              </Route>
                <Route path="/" exact component={TriageReviewListPage} />
                <Route path="/patient/:id" component={TriageReview} />
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
              <Route path="/CreateNewUser">
                <CreateNewUser />
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
