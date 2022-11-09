// Imports
import React, { useState } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { Redirect } from 'react-router-dom';
import setAuthToken from '../utils/setAuthToken';
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import logo from '../images/VolunTierLogo.png';
const { REACT_APP_SERVER_URL } = process.env;


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = { email, password };

        axios.post(`${REACT_APP_SERVER_URL}/users/login`, userData)
        .then(response => {
            const { token } = response.data;
            // save token to localStorage
            localStorage.setItem('jwtToken', token);
            // set token to headers
            setAuthToken(token);
            // decode token to get the user data
            const decoded = jwt_decode(token);
            // set the current user
            props.nowCurrentUser(decoded); // funnction passed down as props.
        })
        .catch(error => {
            console.log('===> Error on login', error);
            alert('Either email or password is incorrect. Please try again');
        });
    }

    if (props.user) return <Redirect to="/profile" /> // double check

    return (
        <MDBContainer fluid className="p-3 my-5 h-custom">

        <MDBRow>
  
          <MDBCol col='10' md='6'>
            <img src={logo} 
            className="img-responsive rounded ml-5 img-fluid" 
            alt="Sample image"
            width="320"
            height="250" 
            />
          </MDBCol>
  
          <MDBCol col='4' md='6'>
  
            <div className="d-flex flex-row align-items-center justify-content-center">
  

  
            </div>
  
            <div className="divider d-flex align-items-center my-4">
              <strong className="text-center fw-bold mx-3 mb-0">Welcome To Our Login!</strong>
            </div>
            <form onSubmit={handleSubmit}>
                <MDBInput wrapperClass='mb-4' placeholder='Email Address' id='formControlLg' type='email' size="lg" value={email} onChange={handleEmail}/>
                <MDBInput wrapperClass='mb-4' placeholder='Password' id='formControlLg' type='password' size="lg" value={password} onChange={handlePassword}/>
            
                <div className="d-flex justify-content-between mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="/">Forgot password?</a>
                </div>
    
                <div className='text-center text-md-start mt-4 pt-2'>
                <button className="btn btn-info" size='lg'>Login</button>
                <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a href="/signup" className="link-danger">Register</a></p>
                </div>
            </form>
          </MDBCol>
  
        </MDBRow>
  
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-success">
  
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2022. All rights reserved.
          </div>
  
          <div>
  
            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
              <MDBIcon fab icon='facebook-f' size="md"/>
            </MDBBtn>
  
            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
              <MDBIcon fab icon='twitter' size="md"/>
            </MDBBtn>
  
            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
              <MDBIcon fab icon='google' size="md"/>
            </MDBBtn>
  
            <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
              <MDBIcon fab icon='linkedin-in' size="md"/>
            </MDBBtn>
  
          </div>
  
        </div>
  
      </MDBContainer>
    )
}

export default Login;
