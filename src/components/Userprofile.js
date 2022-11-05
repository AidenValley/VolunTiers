import React, { useEffect, useState } from "react";
// import { NavLink, Link, Redirect } from 'react-router-dom';
import DashboardNavbar from "./DashboardNavbar";
import setAuthToken from "../utils/setAuthToken";
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
