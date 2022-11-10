import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

function Hours(need, user) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  console.log(`###########>>>>>>`, need);

  const handleTimeIn = (e) => {
    e.preventDefault();
    let now = new Date();
    setCheckIn(now);
    console.log("%%%%%%%%%", checkIn);
  };

  const handleTimeOut = (e) => {
    e.preventDefault();
    setCheckOut(new Date());
    console.log(checkOut);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${REACT_APP_SERVER_URL}/hours/submitTime/${need.opportunities._id}`,
        {
          email: user.email,
          signIn: checkIn,
          signOut: checkOut,
        }
      )
      //need to push userid into users array in Opportunity
      .then((response) => {
        console.log("===> Yay, update was made");
        console.log(response);
      })
      .catch((error) => console.log("===> Error in Submission", error));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button onClick={handleTimeIn}>Check In</button>
        <button onClick={handleTimeOut}>Check Out</button>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Hours;
