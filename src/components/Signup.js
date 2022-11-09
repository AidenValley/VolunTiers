// Imports
import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
  import logo from '../images/VolunTierLogo.png';
const { REACT_APP_SERVER_URL } = process.env;

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // at the beginning of a submit function
        // make sure password and confirm password are equal
        // password length >= 8 characters
        if (password === confirmPassword && password.length >= 8) {
            const newUser = { name, email, password };
            axios.post(`${REACT_APP_SERVER_URL}/users/signup`, newUser)
            .then(response => {
                console.log('===> Yay, new user');
                console.log(response);
                setRedirect(true);
            })
            .catch(error => console.log('===> Error in Signup', error));
        } else {
            if (password !== confirmPassword) return alert('Passwords don\'t match');
            alert('Password needs to be at least 8 characters. Please try again.');
        }
    }

    if (redirect) return <Redirect to="/login" /> // You can have them redirected to profile (your choice)

    return (
        <form onSubmit={handleSubmit}>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                <div className="text-center">
                    <img src={logo}/>
                </div>
                <br />
                
                <MDBInput wrapperClass='mb-4' placeholder='Name' id='formControlLg' type='name' size="lg" value={name} onChange={handleName}/>
                <MDBInput wrapperClass='mb-4' placeholder='Email Address' id='formControlLg' type='email' size="lg" value={email} onChange={handleEmail}/>
                <MDBInput wrapperClass='mb-4' placeholder='Password' id='formControlLg' type='password' size="lg" value={password} onChange={handlePassword}/>
                <MDBInput wrapperClass='mb-4' placeholder='Confirm Password' id='formControlLg' type='password' size="lg" value={confirmPassword} onChange={handleConfirmPassword}/>
                <div className="d-flex justify-content-between mx-3 mb-4">
                    <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                    <a href="/">Forgot password?</a>
                </div>
            
    
                <button className="btn btn-success" size='lg'>Sign In</button>
            </MDBContainer>
        </form>
  
      
    )
}

export default Signup;
