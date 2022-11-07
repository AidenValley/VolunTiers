import React, { useEffect, useState } from "react";
import { MDBCard, MDBCardBody, MDBIcon, MDBRow, MDBCol, MDBCardText } from 'mdbreact';
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

const { REACT_APP_SERVER_URL } = process.env;

const AdminCardSection1 = () => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    renderProfiles();
    renderProfilesTwo();
  }, []);
  useEffect(() => {
    console.log(profile);
  }, [profile]);

  const renderProfiles = async () => {
    setAuthToken(localStorage.getItem("jwtToken"));
    const response = await axios.get(`${REACT_APP_SERVER_URL}/users/profile`);
    setProfile(response.data);
  };
  const renderProfilesTwo = async () => {
    setAuthToken(localStorage.getItem("jwtToken"));
    const response = await axios.get(`${REACT_APP_SERVER_URL}/users/leaders`);
    setProfile(response.data);
  };

  return (
    <MDBRow className="mb-4">
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
              <div className="admin-up">
              <MDBIcon fas icon="hourglass-half" className="fa-2x"/>
                <div className="data">
                  <p>Service Hours:</p>
                  <h4>
                    <strong>{profile.hours}</strong>
                  </h4>
                </div>
              </div>
              <MDBCardBody>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg-primary" role="progressbar"
                    style={{width: '0%'}}></div>
                </div>
                <MDBCardText>Better than last week (0%)</MDBCardText>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
              <div className="admin-up">
              <MDBIcon icon="chart-line" className="warning-color fa-2x"/>
                <div className="data">
                  <p>Events Joined</p>
                  <h4>
                    <strong>0</strong>
                  </h4>
                </div>
              </div>
              <MDBCardBody>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg grey" role="progressbar"
                    style={{width: '5%'}}></div>
                </div>
                <MDBCardText>Worse than last week (5%)</MDBCardText>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
              <div className="admin-up">
              <MDBIcon icon="chart-pie" className="light-blue lighten-1 fa-2x"/>
                <div className="data">
                  <p>Events Engagement</p>
                  <h4>
                    <strong>15</strong>
                  </h4>
                </div>
              </div>
              <MDBCardBody>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar grey darken-2" role="progressbar"
                    style={{width: '35%'}}></div>
                </div>
                <MDBCardText>Worse than last week (35%)</MDBCardText>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
        <MDBCol xl="3" md="6" className="mb-r">
          <MDBCard className="cascading-admin-card">
              <div className="admin-up">
              <MDBIcon icon="chart-bar" className="red accent-2 fa-2x"/>
                <div className="data">
                  <p>Check-In Amount</p>
                  <h4>
                    <strong>20</strong>
                  </h4>
                </div>
              </div>
              <MDBCardBody>
                <div className="progress">
                  <div aria-valuemax="100" aria-valuemin="0" aria-valuenow="25" className="progress-bar bg-primary" role="progressbar"
                    style={{width: '15%'}}></div>
                </div>
                <MDBCardText>Better than last week (15%)</MDBCardText>
              </MDBCardBody>
            </MDBCard>
        </MDBCol>
      </MDBRow>
  )
}

export default AdminCardSection1;

