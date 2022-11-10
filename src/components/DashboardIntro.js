<<<<<<< HEAD
import React, {useState, useEffect} from 'react';
import { MDBCard, MDBCardBody, MDBBreadcrumb, MDBBreadcrumbItem } from 'mdbreact';
=======
import React, {useState, useEffect, Profiler} from 'react';
import { MDBCard, MDBCardBody, MDBIcon, MDBBreadcrumb, MDBBreadcrumbItem, MDBFormInline, MDBBtn } from 'mdbreact';
>>>>>>> main
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
const { REACT_APP_SERVER_URL } = process.env;

const DashboradIntro = () => {
  const [intro, setIntro] = useState([]);

  useEffect(() => {
    renderIntro();
  }, []);
  useEffect(() => {
    console.log(intro);
  }, [intro]);

  const renderIntro = async () => {
    setAuthToken(localStorage.getItem("jwtToken"));
    const response = await axios.get(`${REACT_APP_SERVER_URL}/users/profile`);
    setIntro(response.data);
  };

  return (
    <MDBCard className="mb-5">
        <MDBCardBody id="breadcrumb" className="d-flex align-items-center justify-content-between ">
            <MDBBreadcrumb className='md-form m-0'>
<<<<<<< HEAD
                <MDBBreadcrumb><h4 className='md-form m-0'>Welcome Back!</h4></MDBBreadcrumb>
                <MDBBreadcrumb><h4 className='md-form m-0'>{intro.name}</h4></MDBBreadcrumb>
                <MDBBreadcrumb><h4 className='md-form m-0'>{intro.email}</h4></MDBBreadcrumb>
            </MDBBreadcrumb>
            
        </MDBCardBody>
    </MDBCard>
  )
=======
                {/* <MDBBreadcrumbItem>Welcome Back, {intro.name}</MDBBreadcrumbItem>
                <MDBBreadcrumbItem active>{intro.email}</MDBBreadcrumbItem> */}
            </MDBBreadcrumb>
        </MDBCardBody>
    </MDBCard>
  );
>>>>>>> main
};

export default DashboradIntro;

