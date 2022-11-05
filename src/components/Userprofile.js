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
                <MDBCardText>Web Designer</MDBCardText>
                <MDBIcon far icon="edit mb-5" />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody className="p-4">
                  <MDBTypography tag="h6">{profile.name}</MDBTypography>
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

                  <div className="d-flex justify-content-start">
                    <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
                    <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
                    <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
                  </div>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </section>
=======

  return (
    <section classname="vh-100" style="background-color: #f4f5f7;">
      <div classname="container py-5 h-100">
        <div classname="row d-flex justify-content-center align-items-center h-100">
          <div classname="col col-lg-6 mb-4 mb-lg-0">
            <div classname="card mb-3" style="border-radius: .5rem;">
              <div classname="row g-0">
                <div
                  classname="col-md-4 gradient-custom text-center text-white"
                  style="border-top-left-radius: .5rem; border-bottom-left-radius: .5rem;"
                >
                  <h5>Marie Horwitz</h5>
                  <p>Web Designer</p>
                  <i classname="far fa-edit mb-5"></i>
                </div>
                <div classname="col-md-8">
                  <div classname="card-body p-4">
                    <h6>Information</h6>
                    <hr classname="mt-0 mb-4" />
                    <div classname="row pt-1">
                      <div classname="col-6 mb-3">
                        <h6>Email</h6>
                        <p classname="text-muted">info@example.com</p>
                      </div>
                      <div classname="col-6 mb-3">
                        <h6>Phone</h6>
                        <p classname="text-muted">123 456 789</p>
                      </div>
                    </div>
                    <h6>Projects</h6>
                    <hr classname="mt-0 mb-4" />
                    <div classname="row pt-1">
                      <div classname="col-6 mb-3">
                        <h6>Recent</h6>
                        <p classname="text-muted">Lorem ipsum</p>
                      </div>
                      <div classname="col-6 mb-3">
                        <h6>Most Viewed</h6>
                        <p classname="text-muted">Dolor sit amet</p>
                      </div>
                    </div>
                    <div classname="d-flex justify-content-start">
                      <a href="#">
                        <i classname="fab fa-facebook-f fa-lg me-3"></i>
                      </a>
                      <a href="#">
                        <i classname="fab fa-twitter fa-lg me-3"></i>
                      </a>
                      <a href="#">
                        <i classname="fab fa-instagram fa-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Userprofile;
