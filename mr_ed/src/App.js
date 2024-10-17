import MrEdHeader from './mrEdHeader';
import HomeScreen from './Home';
import Footer from './Footer';
import { useState } from 'react';
import LoginPage from './LoginPage';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MyAccount from './MyAccount';
import VirtualTriage from './VirtualTriage';
import BrowseEDs from './BrowseEDs';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <div className="App">
      { !isLoggedIn &&  <div className="LoggedOut">
          <MrEdHeader setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
          <LoginPage setIsLoggedIn={setIsLoggedIn} />
          <Footer />
        </div> }
        { isLoggedIn &&<div className="LoggedIn">
          <MrEdHeader setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn}/>
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
            <Route path="/BrowseEDs">
              <BrowseEDs />
            </Route>
          </Switch>
          <Footer />
        </div> }
      </div>
    </Router>
  );
}

export default App;
