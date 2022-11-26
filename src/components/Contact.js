import React, { useState } from "react";
import axios from "axios";
import logo from "../images/VolunTierLogo.png";
import { MDBContainer, MDBCardTitle } from "mdb-react-ui-kit";
const { REACT_APP_SERVER_URL } = process.env;

const Contact = () => {
  const [msg, setMsg] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [created, setCreated] = useState(false);

  const handleChange = (e) => {
    setMsg({ ...msg, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContactMsg = msg;
    axios
      .post(`${REACT_APP_SERVER_URL}/contactus`, newContactMsg)
      .then((response) => {
        console.log("===> Yay, new contact message");
        console.log(response);
        setCreated(true);
        setMsg(response.data.contacts);
      });
  };

  if (created) {
    return (
      <div>
        <h1>Thank you, {msg.name}!</h1>
        <p>
          You're already making a difference. We look forward to answering your
          questions within 48 business hours.
        </p>
      </div>
    );
  }

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
      <div className="text-center">
        <img src={logo} alt="logo" />
      </div>
      <MDBCardTitle className="fa-h5 fa-solid h1-responsive pt-3 m-5 text-center">
        <h3 className=""> Ask Us Anything! We want to help.</h3>
      </MDBCardTitle>
      <div className="row">
        <div className="col-md-7 offset-md-2">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={msg.name}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={msg.email}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="message"
                placeholder="Your message/question here..."
                value={msg.message}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="my-5 d-flex flex-column w-100">
              <button type="submit" className="btn btn-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </MDBContainer>
  );
};

export default Contact;
