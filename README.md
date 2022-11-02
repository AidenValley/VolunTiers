# VolunTiers

# Setup

Due to this project using an older package not fully supported on node17+ we'll need to run one initial command before we run our npm install. 

If you are on mac or linux, run the following command:

```
export NODE_OPTIONS=--openssl-legacy-provider
```

for windows users use one of these two commands:

command prompt: 

```
set NODE_OPTIONS=--openssl-legacy-provider
```

powershell:

```
$env:NODE_OPTIONS = "--openssl-legacy-provider"
```

<<<<<<< HEAD

=======
>>>>>>> userStory
### User Story 

- As a user, I want to be able to manage members that are apart of clubs and sports teams within my organization. 
- As a user, I want to be able to verify active and inactive members service hours, contact information, and service project status. 
- As a user, I want to be able to see how many service hours that I have completed and if the hours apply for credits. 
- As a user, I would like to see currently available service hours and past service projects. 
- As a user, I would like to be able to sign in and out of service projects with accurately recorded hours. 
- As a user, I would like to be able to my current badges earned and my ranking on the leader board. 


<<<<<<< HEAD
# VolunTiers About:
## MERN stack web application (Volunteer Tracking Application) that targets the users who are actively seeking for local volunteer activities and become (signup) Tier members. 

## Essentially, this application is fun and intuitive but also helps multiples of professionals who intend to organize their volunteer activities in a condensed form.

# VolunTiers WireFrame:
![VolunTier-WireFrame](https://user-images.githubusercontent.com/107300143/198853680-c266df19-fc8c-4ac5-85cd-231cd1177c43.png)

## Wireframe Key Notes
![image](https://user-images.githubusercontent.com/107300143/198853712-8c98f60d-d12a-4085-aeb6-649606f09b6e.png)
### Home page is designed to have the simple aesthetic look of the application stating few key points of application purposes such as mission statements.


![image](https://user-images.githubusercontent.com/107300143/198853789-eaec093e-0e06-4f47-820b-642e2c8863df.png)

### User Profile Page intends to contain the most crucial information / data that the normal users can dropdown for events, access the service hours, and more volunteer opportunities!




=======
>>>>>>> userStory
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
