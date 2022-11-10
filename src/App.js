// Imports
import React, { useEffect, useState } from "react";
import {
  NavLink,
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
// CSS
import "./App.css";
// Components
import Signup from "./components/Signup";
import About from "./components/About";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Welcome from "./components/Welcome";
import WelcomeIntro from "./components/WelcomeIntro";
import Contact from "./components/Contact";
import Past from "./components/Past";
import OrganizationsContainer from "./components/OrganizationsContainer";
import Opportunities from "./components/Opportunities";
import OpportunitiesDetail from "./components/OpportunitiesDetail";
import OppDetail from "./components/OppDetail";
<<<<<<< HEAD

=======
import DashboardNavbar from "./components/DashboardNavbar";
>>>>>>> main
import OrgDetail from "./components/OrgDetail";
import Userprofile from "./components/Userprofile";
import Board from "./components/Board";

const PrivateRoute = ({ component: Component, ...rest }) => {
  let token = localStorage.getItem("jwtToken");
  console.log("===> Hitting a Private Route");
  return (
    <Route
      {...rest}
      render={(props) => {
        return token ? (
          <Component {...rest} {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};
<<<<<<< HEAD
=======

// Opportunities

// Opportunities
>>>>>>> main

function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    let token;

    if (!localStorage.getItem("jwtToken")) {
      setIsAuthenticated(false);
      console.log("====> Authenticated is now FALSE");
    } else {
      token = jwt_decode(localStorage.getItem("jwtToken"));
      setAuthToken(localStorage.getItem("jwtToken"));
      setCurrentUser(token);
    }
  }, []);

  const nowCurrentUser = (userData) => {
    console.log("===> nowCurrent is here.");
    setCurrentUser(userData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    if (localStorage.getItem("jwtToken")) {
      // remove token for localStorage
      localStorage.removeItem("jwtToken");
      setCurrentUser(null);
      setIsAuthenticated(false);
    }
  };

  return (
<<<<<<< HEAD
    <Router>
      <div className="App">
        
        <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
        
        <Route exact path="/" component={WelcomeIntro} />
        
        
        <div className="container mt-5">
        <Route exact path="/" component={Welcome} />
          <Switch>
            <Route path="/signup" component={Signup} />
            
=======
    <Router style={{ backgroundColor: '#f4f5f7' }}>
      <div className="App">
        
        <Navbar handleLogout={handleLogout} isAuth={isAuthenticated} />
        <Route exact path="/" component={WelcomeIntro} />
        
        <div className="container mt-5">
          <Switch>
            <Route path="/signup" component={Signup} />
            <Route exact path="/" component={Welcome} />
>>>>>>> main
            <Route
              path="/login"
              render={(props) => (
                <Login
                  {...props}
                  nowCurrentUser={nowCurrentUser}
                  setIsAuthenticated={setIsAuthenticated}
                  user={currentUser}
                />
              )}
            />
<<<<<<< HEAD
            
=======
>>>>>>> main
            <PrivateRoute
              path="/profile"
              component={Profile}
              user={currentUser}
              handleLogout={handleLogout}
            />
            
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/opportunities" component={Opportunities} />
            <Route
              path="/opportunitiesdetail"
              component={OpportunitiesDetail}
            />
            <Route path="/oppdetail" component={OppDetail} />
            <Route path="/organizations" component={OrganizationsContainer} />
<<<<<<< HEAD
            
=======
            <Route path="/dashboardnavbar" component={DashboardNavbar} />
>>>>>>> main
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
