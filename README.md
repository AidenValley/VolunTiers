# VolunTiers

Welcome to VolunTiers! This MERN Stack application was created with the purpose of facilitating the tracking of volunteer hours of participation and tracking of events as well. ReactJS was used to build interface components and Bootstrap and CSS was used for styling. This documentation is meant to explain how this app was created and resources were used for its completions.

# Setup

1. Fork this repository
2. Clone to your machine
3. Once open run ``npm i`` to install necessary dependencies
4. Run npm start to load up the server and preview the application

### User Story 

- As a user, I want to be able to see volunteer opportunities near me. 
- As a user, I want to be able to volunteer for opportunities.
- As a user, I want to be able to see how many service hours that I have completed. 
- As a user, I would like to see past service projects. 
- As a user, I would like to be able to sign in and out of service projects with accurately recorded hours. 
- As a user, I would like to see my ranking on the leader board. 
- As an organization, I would like to add an service opportunity.
- As an organization, I would like to know who has signed up to volunteer at my event.


# VolunTiers About:
## MERN stack web application utilizing ReactJS, Express, Mongoose, and NodeJS that targets users who are actively seeking local volunteer activities and organizations in search of service-minded individuals for their community-service opportunities. 

## This application is fun and intuitive but also helps multiples of professionals who intend to organize their volunteer activities in one place.

# VolunTiers WireFrame:
![VolunTier-WireFrame](https://user-images.githubusercontent.com/107300143/198853680-c266df19-fc8c-4ac5-85cd-231cd1177c43.png)

## Wireframe Key Notes
![image](https://user-images.githubusercontent.com/107300143/198853712-8c98f60d-d12a-4085-aeb6-649606f09b6e.png)
### Home page is designed to have the simple aesthetic look of the application stating few key points of application purposes such as mission statements.


![image](https://user-images.githubusercontent.com/107300143/198853789-eaec093e-0e06-4f47-820b-642e2c8863df.png)

### User Profile Page intends to contain the most crucial information / data that the normal users can dropdown for events, access the service hours, and more volunteer opportunities!

## Log In Page:

![Screen Shot 2022-11-09 at 8 19 22 PM](https://user-images.githubusercontent.com/96893640/200976876-e40d3365-01f1-4caf-89f6-f30710426b82.png)

## Home page
![Screen Shot 2022-11-09 at 8 20 02 PM](https://user-images.githubusercontent.com/96893640/200976962-95cbfaa5-6fa8-4545-acb5-4392948bbadc.png)

## Dashboard
![Screen Shot 2022-11-09 at 8 20 46 PM](https://user-images.githubusercontent.com/96893640/200977055-46669362-e9ab-4ea7-b23f-82752905a1ab.png)

## Profile
![Screen Shot 2022-11-09 at 8 21 27 PM](https://user-images.githubusercontent.com/96893640/200977153-5926dbbf-11fa-4777-b70c-db416c1ec92e.png)

## LeaderBoard
![Screen Shot 2022-11-09 at 8 21 57 PM](https://user-images.githubusercontent.com/96893640/200977210-448e9ed1-8ca4-46f7-bec4-571806af826e.png)

## Events/Opportunities
![Screen Shot 2022-11-09 at 8 22 38 PM](https://user-images.githubusercontent.com/96893640/200977299-c10b4207-cef7-4303-be96-b3b4a630ee9a.png)



# MERN Authentication Frontend

| Components | Links to Code | Description |
| --- | --- | --- |
| `App`| [`App`](https://github.com/romebell/mern-auth-frontend#app-component) | The component that manages the entire app |
| `Signup`| [`Signup`](https://github.com/romebell/mern-auth-frontend/blob/main/docs/signup.md) | Allow the user to signup |
| `Login`| [`Login`](https://github.com/romebell/mern-auth-frontend/blob/main/docs/login.md) | Allows the user to login to the app |
| `Navbar`| [`Navbar`](https://github.com/romebell/mern-auth-frontend/blob/main/docs/navbar.md) | Make `App` class component |
| `Profile`| [`Profile`](#) | A component that displays the user profile information |
| `setAuthToken`| [`setAuthToken`](https://github.com/romebell/mern-auth-frontend/blob/main/docs/setAuthToken.md) | A utility function that adds a token to the `Authentication` header to manage current user |
| `About`| [`About`](https://github.com/romebell/mern-auth-frontend/blob/main/docs/other-components.md#about) | A component that decribes the app |
| `Footer`| [`Footer`](https://github.com/romebell/mern-auth-frontend/blob/main/docs/other-components.md#footer) | A footer that goes on each component |
| `Welcome`| [`Welcome`](https://github.com/romebell/mern-auth-frontend/blob/main/docs/other-components.md#welcome) | A welcome page for the user |


### `App Component`

### Imports for `App`

```jsx
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
import './App.css';

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
import DashboardNavbar from "./components/DashboardNavbar";
import OrgDetail from "./components/OrgDetail";
import Userprofile from "./components/Userprofile";
import Board from "./components/Board";

```

### `useState` inside `App`

```jsx
function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);
}
```

### `PrivateRoute`

```jsx
const PrivateRoute = ({ component: Component, ...rest}) => {
  let token = localStorage.getItem('jwtToken');
  console.log('===> Hitting a Private Route');
  return <Route {...rest} render={(props) => {
    return token ? <Component {...rest} {...props} /> : <Redirect to="/login"/>
  }} />
}
```

### `useEffect` inside `App`

```jsx
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
```

### `nowCurrentUser`

```jsx
const nowCurrentUser = (userData) => {
    console.log('===> nowCurrent is here.');
    setCurrentUser(userData);
    setIsAuthenticated(true);
}
```

### `handleLogout`

```jsx
const handleLogout = () => {
    if (localStorage.getItem('jwtToken')) {
        // remove token for localStorage
        localStorage.removeItem('jwtToken');
        setCurrentUser(null);
        setIsAuthenticated(false);
    }
}
```

### `return` of `App`

```jsx
return (
<div className="App">
    <h1>MERN Authentication</h1>
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
        </Switch>
    </div>
    <Footer />
</div>
);
```

### Finished

```jsx
// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
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

const PrivateRoute = ({ component: Component, ...rest}) => {
  let token = localStorage.getItem('jwtToken');
  console.log('===> Hitting a Private Route');
  return <Route {...rest} render={(props) => {
    return token ? <Component {...rest} {...props} /> : <Redirect to="/login"/>
  }} />
}

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
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
```
