import React, { useEffect, useState } from "react";
import setAuthToken from "../utils/setAuthToken";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';
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
    <div className="vh-100" style={{ backgroundColor: '#9de2ff' }}>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="5" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="text-black">
                  <div className="flex-">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px' }}
                      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC5ww3E4QY6wKDfYAMfRH0AFf601HUU9HLNQ&usqp=CAU'
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>{profile.name}</MDBCardTitle>
                    <MDBCardText>VolunTier Bronze Member, {profile.role}</MDBCardText>

                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div>
                        <p className="small text-muted mb-1">Email</p>
                        <p className="mb-0">{profile.email}</p>
                      </div>
                      <div className="px-4">
                        <p className="small text-muted mb-1">Phone</p>
                        <p className="mb-0">{profile.phone}</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Total Service Hours</p>
                        <p className="mb-0">{profile.hours}</p>
                      </div>
                    </div>
                    <div className="">
                      <MDBBtn className="btn btn-success">Create Event</MDBBtn>
                      <MDBBtn className="flex-grow-1">Back to Opportunities</MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  )};

export default Userprofile;
