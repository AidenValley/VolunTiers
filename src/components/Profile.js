import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { MDBListGroup, MDBListGroupItem, MDBIcon } from "mdbreact";
import DashboardCard from "./DashboardCard";
import DashboardTable from "./DashboardTable";
import DashboardIntro from "./DashboardIntro";

const { REACT_APP_SERVER_URL } = process.env;

const Profile = (props) => {
  const { handleLogout, user } = props;
  const { id, name, email, exp, hours } = user;
  const expirationTime = new Date(exp * 1000);
  let currentTime = Date.now();

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

  // make a condition that compares exp and current time
  if (currentTime >= expirationTime) {
    handleLogout();
    alert("Session has ended. Please login to continue.");
  }

  const userData = user ? <div></div> : <h2>Loading...</h2>;

  const errorDiv = () => {
    return (
      <div className="text-center pt-4">
        <h3>
          Please <Link to="/login">login</Link> to view this page
        </h3>
      </div>
    );
  };

  return (
    <>
      <div className="text-center pt-4">{user ? userData : errorDiv()}</div>
      {/* <Route path="/dashboardnavbar" component={DashboardNavbar} /> */}
      <div className="sidebar-fixed">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse "
          >
            <div className="position-sticky pt-3 sidebar-sticky">
              <ul className="nav flex-column">
                <MDBListGroup className="list-group-flush">
                  <NavLink exact={true} to="/" activeClassName="activeClass">
                    <MDBListGroupItem>
                      <MDBIcon icon="chart-pie" className="mr-3" />
                      Dashboard
                    </MDBListGroupItem>
                  </NavLink>
                  <NavLink to="/userProfile" activeClassName="activeClass">
                    <MDBListGroupItem>
                      <MDBIcon icon="user" className="mr-3" />
                      Profile
                    </MDBListGroupItem>
                  </NavLink>
                  <NavLink to="/opportunities" activeClassName="activeClass">
                    <MDBListGroupItem>
                      <MDBIcon icon="table" className="mr-3" />
                      Opportunities
                    </MDBListGroupItem>
                  </NavLink>
                  <NavLink to="/board" activeClassName="activeClass">
                    <MDBListGroupItem>
                      <MDBIcon icon="map" className="mr-3" />
                      LeaderBoards
                    </MDBListGroupItem>
                  </NavLink>
                  <NavLink to="/orgdetail/:id" activeClassName="activeClass">
                    <MDBListGroupItem>
                      <MDBIcon icon="exclamation" className="mr-3" />
                      Create Event
                    </MDBListGroupItem>
                  </NavLink>
                </MDBListGroup>
              </ul>
            </div>
          </nav>

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
              <h1 className="h2">Your Dashboard</h1>
              <div className="btn-toolbar mb-2 mb-md-0"></div>
            </div>
            <span className="portfolio-item d-block">
                <DashboardIntro />
              <div className="">
                <div className="">
                  <div className="row text-center">
                    <DashboardCard />
                  </div>
                </div>
              </div>

              <div className="container">
                <div className="container">
                  <div className="text-center">
                    <DashboardTable />
                  </div>
                </div>
              </div>
            </span>
          </main>
        </div>
      </div>
    </>
  );
};

export default Profile;
