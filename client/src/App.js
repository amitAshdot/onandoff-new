import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
//Layout component
import Navbar from "./components/layouts/Navbar";
// import SideBar from "./components/layouts/SideBar";
//Pages components
import Home from "./components/pages/Home";
import AddWebsite from "./components/pages/AddWebsite";
import AddTimerplus from "./components/pages/AddTimerplus";
import About from "./components/pages/About";
import Verify from "./components/pages/Verify";

// import EditWeb from "./components/pages/EditWeb";
//auth components
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
//Redirect components
import PrivateRoutes from './components/routing/PrivateRoute';
// import Current from './components/routing/Current';
//Auth token
import setAuthToken from './utils/setAuthToken';
//context components
import WebsiteState from './context/website/WebsiteState';

import TimerplusState from './context/timerPlus/TimerPlusState';
import AuthState from './context/auth/AuthState';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}


const App = () => {
  // const href = window.location.href
  // const isUserWebsite = href.indexOf('?');
  // const websiteid = href.substring(href.indexOf("?") + 1);
  return (
    <AuthState>
      <WebsiteState>
        <TimerplusState>
        <Router>
          <div className="App">
            {/* {login() ?<SideBar /> : null}   */}
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/addwebsite' component={AddWebsite} />
                <Route exact path='/addtimerplus' component={AddTimerplus} />
                {/* <PrivateRoutes exact path='/' component={Home} /> */}
                {/* <PrivateRoutes exact path='/addwebsite' component={AddWebsite} /> */}
                {/* <PrivateRoutes exact path='/edit-web' component={EditWeb} /> */}
                <Route exact path='/about' component={About} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/login' component={Login} />
                <Route path='/verify' component={Verify} />
              </Switch>
            </div>
          </div>
        </Router>
        </TimerplusState>
      </WebsiteState>
    </AuthState>
  );
}

export default App;
