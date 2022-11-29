<div className="row mt-4">
  <div>
    <h3>To add an event, please register your organization.</h3>
  </div>
  <div className="col-md-7 offset-md-3">
    <div className="card card-body">
      <h2 className="py-2">Organization Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="orgName">Organization Name</label>
          <input
            type="text"
            name="orgName"
            value={org.orgName}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactEmail">Email</label>
          <input
            type="email"
            name="contactEmail"
            value={org.contactEmail}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactPerson">Contact Name</label>
          <input
            type="text"
            name="contactPerson"
            value={org.contactPerson}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="contactPhone">Phone</label>
          <input
            type="text"
            name="contactPhone"
            value={org.contactPhone}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary float-right">
          Submit
        </button>
      </form>
    </div>
  </div>
</div>;


// Imports
import React, { useState } from "react";
import axios from "axios";
import OppCreateForm from "./OppCreateForm";
import logo from "../images/VolunTierLogo.png";
import { MDBContainer, MDBInput, MDBCardTitle } from "mdb-react-ui-kit";

const { REACT_APP_SERVER_URL } = process.env;

const OrganizationsContainer = () => {
  const [org, setOrg] = useState({
    orgName: "",
    contactPerson: "",
    contactEmail: "",
    contactPhone: "",
  });

  const [created, setCreated] = useState(false);

  const handleChange = (e) => {
    setOrg({ ...org, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrganization = org;
    axios.post(`${REACT_APP_SERVER_URL}/organizations/`, newOrganization)
      .then((response) => {
        console.log(response);
        setCreated(true);
        setOrg(response.data.organizations);
      })
  };

  if (created) {
    return (
      <div>
        <h1>Welcome, {org.orgName}! </h1>
        <p>
          You can create an event or look at who's registered for your event
          here.
        </p>
        <div>
          <OppCreateForm org={org._id} />
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
        <div className="text-center">
          <img src={logo} alt="logo" />
        </div>
        <MDBCardTitle className="fa-h5 fa-solid h1-responsive pt-3 m-5 text-center">
          <h3 className=""> Please Register Your Organization</h3>
        </MDBCardTitle>
        <br />

        <MDBInput
          name="orgname"
          wrapperClass="mb-4"
          placeholder="Organization Name"
          id="formControlLg"
          type="text"
          size="lg"
          value={org.orgName}
          onChange={handleChange}
        />
        <MDBInput
          wrapperClass="mb-4"
          placeholder="Email Address"
          id="formControlLg"
          type="text"
          size="lg"
          value={org.contactEmail}
          onChange={handleChange}
        />
        <MDBInput
          wrapperClass="mb-4"
          placeholder="Contact Name"
          id="formControlLg"
          type="text"
          size="lg"
          value={org.contactPerson}
          onChange={handleChange}
        />
        <MDBInput
          wrapperClass="mb-4"
          placeholder="Phone"
          id="formControlLg"
          type="text"
          size="lg"
          value={org.contactPhone}
          onChange={handleChange}
        />
        <div className="d-flex justify-content-between mx-3 mb-4"></div>

        <button className="btn btn-success" size="lg">
          Submit
        </button>
      </MDBContainer>
    </form>
  );
};

<section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
    <MDBContainer className="py-5 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol lg="6" className="mb-4 mb-lg-0">
          <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
            <MDBRow className="g-0">
              <MDBCol md="4" className="gradient-custom text-center text-white"
                style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
                <MDBCardImage src="https://www.cityheadshots.com/uploads/5/1/2/1/5121840/highres-mjb-4556_orig.jpg"
                  alt="Avatar" className="my-5" style={{ width: '80px' }} fluid 
                  width="320"
                  height="250" 
                  />
                <MDBTypography tag="h5"></MDBTypography>
                <MDBIcon far icon="edit mb-5" />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody className="p-4">
                  <MDBTypography tag="h6">{profile.name}
                  </MDBTypography>
                  <hr className="mt-0 mb-4" />
                  <MDBRow className="pt-1">
                    <MDBCol size="10" className="mb-3">
                      <MDBTypography tag="h6">Email</MDBTypography>
                      <MDBCardText className="text-muted">{profile.email}</MDBCardText>
                    </MDBCol>
                    <MDBCol size="10" className="mb-3">
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


