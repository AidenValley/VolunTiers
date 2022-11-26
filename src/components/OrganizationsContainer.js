import React, { useState } from "react";
import axios from "axios";
import OppCreateForm from "./OppCreateForm";
import logo from "../images/VolunTierLogo.png";
import { MDBContainer, MDBCardTitle } from "mdb-react-ui-kit";

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
    axios
      .post(`${REACT_APP_SERVER_URL}/organizations/`, newOrganization)
      .then((response) => {
        console.log("===> Yay, new organization");
        console.log(response);
        setCreated(true);
        setOrg(response.data.organizations);
      });
  };
  if (created) {
    return (
      <div>
        <h1>Welcome, {org.orgName}!</h1>
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
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <div className="text-center">
        <img src={logo} alt="logo" />
      </div>
      <MDBCardTitle className="fa-h5 fa-solid h1-responsive pt-3 m-5 text-center">
        <h3 className=""> Please Register Your Organization</h3>
      </MDBCardTitle>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <input
            type="text"
            name="orgName"
            placeholder="Organization Name"
            value={org.orgName}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group mb-4">
          <input
            type="email"
            name="contactEmail"
            placeholder="Email Address"
            value={org.contactEmail}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group mb-4">
          <input
            type="text"
            name="contactPerson"
            placeholder="Contact Name"
            value={org.contactPerson}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group mb-4">
          <input
            type="text"
            name="contactPhone"
            placeholder="Phone Number"
            value={org.contactPhone}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="my-5 d-flex flex-column w-100">
            <button size="lg" className="btn btn-success">
            Submit
            </button>
        </div>
      </form>
    </MDBContainer>
  );
};
export default OrganizationsContainer;
