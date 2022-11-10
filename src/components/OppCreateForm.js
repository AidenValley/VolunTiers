// Imports
import React, { useState } from 'react';
import axios from 'axios';

const { REACT_APP_SERVER_URL } = process.env;

const OppCreateForm = (org) => {
    const [eventCreate, setEventCreate] = useState({
        name: "",
        location: "",
        date: "",
        startTime: "",
        endTime: "",
        description: "",
        users: [],
        categories: "",
        organizationId: ""
    });
    

    const [created, setCreated] = useState(false)

    const handleChange = (e) => {
        setEventCreate({...eventCreate, [e.target.name]: e.target.value});
    }



    const handleSubmit = (e) => {
        e.preventDefault();  
            const newEvent = eventCreate;
            axios.post(`${REACT_APP_SERVER_URL}/opportunities`, newEvent)
            .then(response => {
                console.log('===> Yay, new event');
                console.log(response);
                setCreated(true);
            })
        }

    if (created) return (
    <div><h1>{org.orgName}</h1><p>Your event, {eventCreate.name} was created.</p>
    <form><button type='Submit'>Who's registered?</button></form>
    </div> 
    )
  
    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Create an Event</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Event Name</label>
                            <input type="text" name="name" value={eventCreate.name} onChange={handleChange} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="location">Event Location</label>
                            <input type="text" name="location" value={eventCreate.location} onChange={handleChange} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="date">Date of Event</label>
                            <input type="text" name="date" value={eventCreate.date} onChange={handleChange} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="startTime">Start Time</label>
                            <input type="text" name="startTime" value={eventCreate.startTime} onChange={handleChange} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="endTime">End Time</label>
                            <input type="text" name="endTime" value={eventCreate.endTime} onChange={handleChange} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <input type="text" name="description" value={eventCreate.description} onChange={handleChange} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <input type="hidden" name="organizationId" value={org._id} onChange={handleChange} className="form-control"/>
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        //working on event form to import to organizations after signup
    )
}

export default OppCreateForm;
