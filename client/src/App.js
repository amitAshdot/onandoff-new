import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
//Layout component
import Navbar from "./components/layouts/Navbar";

//Pages components
import Home from "./components/pages/Home";
import AddWebsite from "./components/pages/AddWebsite";
import AddTimerplus from "./components/pages/AddTimerplus";
import About from "./components/pages/About";
import HowItWorks from "./components/pages/HowItWorks";
import Verify from "./components/pages/Verify";

//auth components
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";

//Redirect components
// import PrivateRoutes from './components/routing/PrivateRoute';

//Auth token
import setAuthToken from './utils/setAuthToken';
//context components
import WebsiteState from './context/website/WebsiteState';

import TimerplusState from './context/timerPlus/TimerPlusState';
import AuthState from './context/auth/AuthState';
// import { useTransition,  animated } from 'react-spring'


if (localStorage.token) {
  setAuthToken(localStorage.token);
}
const App = () => {
  // const { location } = useContext(__RouterContext);
  // const transitions = useTransition(location, location => location.pathname, {
  //   from: { opacity: 0 },
  //   enter: { opacity: 1 },
  //   leave: { opacity: 0 }
  // });
  return (
    <AuthState>
      <WebsiteState>
        <TimerplusState>
          <Router>
            <div className="App">
              <Navbar />
              <div className="container">
              {/* {transitions.map(({ item, props, key }) => (
                 <animated.div key={key} style={props}>
                    <Switch location={item}> */}
                    <Switch>
                      <Route exact path='/' component={Home} />
                      <Route exact path='/addwebsite' component={AddWebsite} />
                      <Route exact path='/addtimerplus' component={AddTimerplus} />
                      <Route exact path='/about' component={About} />
                      <Route exact path='/how-it-works' component={HowItWorks} />
                      <Route exact path='/register' component={Register} />
                      <Route exact path='/login' component={Login} />
                      <Route path='/verify' component={Verify} />
                    </Switch>
                  {/* </animated.div>
                ))} */}
              </div>
            </div>
          </Router>
        </TimerplusState>
      </WebsiteState>
    </AuthState>
  );
}

export default App;
