import React, { useState, useEffect, useSyncExternalStore } from "react";
import { useLocation } from "react-router-dom";
import setAuthToken from "../utils/setAuthToken";
import axios from "axios";
import Hours from "./Hours";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
import logo from '../images/VolunTierLogo.png';

const { REACT_APP_SERVER_URL } = process.env;

const OpportunitiesDetail = (user) => {
  let location = useLocation();
  const data = location.state;
  const userData = user;
  const [isregistered, setIsRegistered] = useState(false);
  const [profile, setProfile] = useState([]);

  console.log("This is the data>>>>>>>>>", data);
  console.log("Did the User info get passed????", user);

  useEffect(() => {
    renderProfiles();
  }, []);

  useEffect(() => {
    console.log(profile);
  }, [profile]);

  const renderProfiles = async () => {
    setAuthToken(localStorage.getItem("jwtToken"));
    const response = await axios.get(`${REACT_APP_SERVER_URL}/users/profile`);
    setProfile(response.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`------>TESTERT ${profile.email}`);
    console.log(profile);
    console.log(`%%%%%%%%%%%%%%%%%%%%%%%%%% ${data.opportunities._id}`);
    axios
      .put(
        `${REACT_APP_SERVER_URL}/opportunities/register/${data.opportunities._id}`,
        { email: `${profile.email}` }
      )
      //need to push userid into users array in Opportunity
      .then((response) => {
        console.log("===> Yay, update was made");
        console.log(response);
        setIsRegistered(true);
      })
      .catch((error) => console.log("===> Error in Submission", error));
  };

  const handleDelete = (e) => {
    e.preventDefault();
    console.log(`------>TESTERT ${profile.email}`);
    console.log(profile);
    console.log(`%%%%%%%%%%%%%%%%%%%%%%%%%% ${data.opportunities._id}`);
    axios
      .put(
        `${REACT_APP_SERVER_URL}/opportunities/remove/${data.opportunities._id}`,
        { email: `${profile.email}` }
      )
      .then((response) => {
        console.log("===> User is no longer registered");
        console.log(response);
        setIsRegistered(false);
      })
      .catch((error) => console.log("===> Error in Submission", error));
  };

  if (isregistered) {
    return (
      <div>
        <div>
          <h3>You are registered for </h3>
          <h2>{data.opportunities.name}</h2>
          <h4>{`${new Date(data.opportunities.date).getMonth() + 1}-${new Date(
            data.opportunities.date
          ).getDate()}-${new Date(data.opportunities.date).getFullYear()}`}</h4>
          <h4>
            {data.opportunities.startTime} until {data.opportunities.endTime}
          </h4>
          <h5>{data.opportunities.description}</h5>
        </div>
        <Hours need={data} user={profile} />
        <div>
          <button
            onClick={handleDelete}
            className="btn btn-primary float-right"
          >
            Unregister
          </button>
        </div>
      </div>
    );
  }

  return (
    <MDBCard alignment="center">
      <MDBCardHeader>
        <h2>Make a World of Difference...</h2>
      </MDBCardHeader>
      <MDBCardBody>
        <MDBCardTitle>
            <img src={logo} alt="logo" width="150px"/>
        </MDBCardTitle>
        <MDBCardText>
          <h3>Volunteer for {data.opportunities.name}</h3>
        </MDBCardText>
        <MDBCardText>
          <strong>
            {data.opportunities.startTime} until {data.opportunities.endTime}
          </strong>
        </MDBCardText>
        <MDBCardText>
          <h4>{data.opportunities.description}</h4>
        </MDBCardText>
        <MDBBtn type="submit" onClick={handleSubmit} className="btn-success">
          Register Now!
        </MDBBtn>
      </MDBCardBody>
      <MDBCardFooter>{`${
        new Date(data.opportunities.date).getMonth() + 1
      }-${new Date(data.opportunities.date).getDate()}-${new Date(
        data.opportunities.date
      ).getFullYear()}`}</MDBCardFooter>
    </MDBCard>
  );
};

export default OpportunitiesDetail;
