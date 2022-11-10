import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
const  REACT_APP_SERVER_URL  = process.env.REACT_APP_SERVER_URL;


function Hours(need, user) {

  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  console.log(`###########>>>>>>`, need)

  const handleTimeIn = (e) => {
    e.preventDefault();
    let now = new Date()
    setCheckIn(now);
    console.log('%%%%%%%%%', checkIn)
    };

  const handleTimeOut = (e) => {
    e.preventDefault();
    setCheckOut(new Date());
    console.log(checkOut)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${REACT_APP_SERVER_URL}/hours/submitTime/6365e304bcb8c11fcd5e60a9`, { 
        email: user.email,
        signIn: checkIn,
        signOut: checkOut
     })
        //need to push userid into users array in Opportunity 
        .then(response => {
            console.log('===> Yay, update was made');
            console.log(response);
        })
        .catch(error => console.log('===> Error in Submission', error));
}
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <button onClick={handleTimeIn}>Check In</button>
      <button onClick={handleTimeOut}>Check Out</button>

      <button type="submit" className="btn btn-primary float-right">Submit</button>
      </form>

      {/* <button onClick={()=> props.checkingIn()}>Check In</button>
      <button onClick={()=> props.checkingOut()}>Check Out</button>
      <button onClick={()=> props.submitTime()}>Submit</button> */}

    </div>
  );
}



export default Hours;