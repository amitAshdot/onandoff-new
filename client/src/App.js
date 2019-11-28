import React, { Fragment, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
//Layout component
import Navbar from "./components/layouts/Navbar";
import SideBar from "./components/layouts/SideBar";
//Pages components
import Home from "./components/pages/Home";
import AddWebsite from "./components/pages/AddWebsite";
import About from "./components/pages/About";
import Admin from "./components/pages/Admin";
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
import UserState from './context/user/UserState';
import AuthState from './context/auth/AuthState';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <WebsiteState>
        <UserState>
            <Router>
              <div className="App">
                <Navbar />
                {/* {login() ?<SideBar /> : null}   */}
                <div className="container">
                  <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/addwebsite' component={AddWebsite} />
                    <PrivateRoutes exact path='/admin' component={Admin} />
                    {/* <PrivateRoutes exact path='/' component={Home} /> */}
                    {/* <PrivateRoutes exact path='/addwebsite' component={AddWebsite} /> */}
                    {/* <PrivateRoutes exact path='/edit-web' component={EditWeb} /> */}
                    <Route exact path='/about' component={About} />
                    <Route exact path='/register' component={Register} />
                    <Route exact path='/login' component={Login} />

                    
                  </Switch>

                </div>
              </div>
            </Router>
        </UserState>
      </WebsiteState>
    </AuthState>
  );
}

export default App;
