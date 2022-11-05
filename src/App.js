// Imports
import React, { useEffect, useState } from 'react';
import { NavLink, Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
// CSS
import './App.css';
// Components
import Signup from './components/Signup';
import About from './components/About';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import Welcome from './components/Welcome';
import Contact from './components/Contact';
import Past from './components/Past';
import OrganizationsContainer from './components/OrganizationsContainer';
import Opportunities from './components/Opportunities';
import DashboardNavbar from './components/DashboardNavbar';
import OrgDetail from './components/OrgDetail';
import Userprofile from './components/Userprofile';
import Board from './components/Board';

const PrivateRoute = ({ component: Component, ...rest }) => {

  let token = localStorage.getItem('jwtToken');
  console.log('===> Hitting a Private Route');
  return <Route {...rest} render={(props) => {
    return token ? <Component {...rest} {...props} /> : <Redirect to="/login"  />
  }} />
}

// Opportunities

// Opportunities

function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);


  useEffect(() => {
    let token;

    if (!localStorage.getItem('jwtToken')) {
      setIsAuthenticated(false);
      console.log('====> Authenticated is now FALSE');
    } else {
      token = jwt_decode(localStorage.getItem('jwtToken'));
      setAuthToken(localStorage.getItem('jwtToken'));
      setCurrentUser(token);
    }
  }, []);

  const nowCurrentUser = (userData) => {
    console.log('===> nowCurrent is here.');
    setCurrentUser(userData);
    setIsAuthenticated(true);
  }

  const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
      // remove token for localStorage
      localStorage.removeItem('jwtToken');
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  }

  return (
    <Router>
    <div className="App">
      <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
      <div className="container mt-5">
        <Switch>
          <Route path='/signup' component={Signup} />
          <Route 
            path="/login"
            render={(props) => <Login {...props} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} user={currentUser}/>}
          />
          <PrivateRoute path="/profile" component={Profile} user={currentUser} handleLogout={handleLogout} />
          <Route exact path="/" component={Welcome} />
          <Route path="/about" component={About} />
          <Route path="/past" component={Past} />
          <Route path="/contact" component={Contact} />
          <Route path="/opportunities" component={Opportunities} />
          <Route path="/organizations" component={OrganizationsContainer} />
          <Route path="/dashboardnavbar" component={DashboardNavbar} />
          <Route path="/userprofile" component={Userprofile} />
          <Route path="/orgdetail/:id" component={OrgDetail} />
          <Route path="/board" component={Board} />
        </Switch>
        
        </div>

        <Footer />

      </div>
    </Router>
  );
}

export default App;
