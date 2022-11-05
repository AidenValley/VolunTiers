// Imports
import React, { useState } from 'react';
import axios from 'axios';

const { REACT_APP_SERVER_URL } = process.env;

const OppCreateForm = (org) => {
    const [eventCreate, setEventCreate] = useState({
        eventName: "",
        eventLocation: "",
        eventDate: "",
        startTime: "",
        endTime: "",
        description: "",
        users: [],
        organizationId: ""
    });
    

    const [created, setCreated] = useState(false)

    const handleChange = (e) => {
        setEventCreate({...eventCreate, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();  
            const newEvent = eventCreate;
            axios.post(`${REACT_APP_SERVER_URL}/events/create`, newEvent)
            .then(response => {
                console.log('===> Yay, new event');
                console.log(response);
                setCreated(true);
            })
        }

    if (created) return <div><h1>{org.orgName}</h1><p>Your event, {eventCreate.eventName} was created.</p></div> 
  
    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Create an Event</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="eventName">Event Name</label>
                            <input type="text" name="eventName" value={eventCreate.eventName} onChange={handleChange} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="eventLocation">Event Location</label>
                            <input type="email" name="eventLocation" value={eventCreate.eventLocation} onChange={handleChange} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="eventDate">Contact Name</label>
                            <input type="text" name="eventDate" value={eventCreate.eventDate} onChange={handleChange} className="form-control"/>
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
                            <label htmlFor="description">End Time</label>
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
