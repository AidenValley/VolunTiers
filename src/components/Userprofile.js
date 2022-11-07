import React, { useEffect, useState } from "react";
// import { NavLink, Link, Redirect } from 'react-router-dom';
import DashboardNavbar from "./DashboardNavbar";
import setAuthToken from "../utils/setAuthToken";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
// import Profile from'./Profile';
import axios from "axios";
const { REACT_APP_SERVER_URL } = process.env;

const Userprofile = () => {
  const [profile, setProfile] = useState([]);
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

  return (
    <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="6" className="mb-4 mb-lg-0">
          <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
            <MDBRow className="g-0">
              <MDBCol md="4" className="gradient-custom text-center text-white"
                style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                <MDBCardImage src="https://www.cityheadshots.com/uploads/5/1/2/1/5121840/highres-mjb-4556_orig.jpg"
                  alt="Avatar" className="my-5" style={{ width: '80px' }} fluid />
                <MDBTypography tag="h5">{profile.name}</MDBTypography>
                <MDBIcon far icon="edit mb-5" />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody className="p-4">
                  <MDBTypography tag="h6">{profile.name}
                    <button tag= "h7">Edit </button>
                  </MDBTypography>
                  <hr className="mt-0 mb-4" />
                  <MDBRow className="pt-1">
                    <MDBCol size="6" className="mb-3">
                      <MDBTypography tag="h6">Email</MDBTypography>
                      <MDBCardText className="text-muted">{profile.email}</MDBCardText>
                    </MDBCol>
                    <MDBCol size="6" className="mb-3">
                      <MDBTypography tag="h6">Phone</MDBTypography>
                      <MDBCardText className="text-muted">{profile.phone}</MDBCardText>
                    </MDBCol>
                  </MDBRow>

                  <MDBTypography tag="h6">Your Contribution</MDBTypography>
                  <hr className="mt-0 mb-4" />
                  <MDBRow className="pt-1">
                    <MDBCol size="6" className="mb-3">
                      <MDBTypography tag="h6">Your Role</MDBTypography>
                      <MDBCardText className="text-muted">{profile.role}</MDBCardText>
                    </MDBCol>
                    <MDBCol size="6" className="mb-3">
                      <MDBTypography tag="h6">Total Service Hours</MDBTypography>
                      <MDBCardText className="text-muted">{profile.hours}</MDBCardText>
                    </MDBCol>
                  </MDBRow>

                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </section>
  )};

export default Userprofile;
