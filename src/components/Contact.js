import React, { useState } from 'react';
import axios from 'axios';
const { REACT_APP_SERVER_URL } = process.env;

const Contact = () => {
  const [msg, setMsg] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [created, setCreated] = useState(false)

  const handleChange = (e) => {
    setMsg({ ...msg, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContactMsg = msg;
    axios.post(`${REACT_APP_SERVER_URL}/contactus`, newContactMsg)
      .then(response => {
        console.log('===> Yay, new contact message');
        console.log(response);
        setCreated(true);
        setMsg(response.data.contacts)
      })
  }

  if (created) {

    return (<div>
      <h1>Thank you, {msg.name}!</h1>
      <p>You're already making a difference. We look forward to answering your questions within 48 business hours.</p>
    </div>)
  }


  return (
    <div className="row mt-4">
      <div className="col-md-7 offset-md-3">
        <div className="card card-body">
          <h2 className="py-2">Ask Us Anything! We want to help.</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" value={msg.name} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" value={msg.email} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your message/question here...</label>
              <input type="text" name="message" value={msg.message} onChange={handleChange} className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary float-right">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
