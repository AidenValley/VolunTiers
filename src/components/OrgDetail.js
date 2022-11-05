// Imports
import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const { REACT_APP_SERVER_URL } = process.env;

const OrgDetail = () => {

    const [opportunity, setOpportunity] = useState({
        eventName: " ",
        eventDate: " ",
        eventLocation: " ",
        startTime: " ",
        endTime: " ",
        description:" ",
        organizationId: " "
    });
    
    const [redirect, setRedirect] = useState(false);

    const handleChange = (e) => {
        setOpportunity({...opportunity, [e.target.name]: e.target.value});
        console.log(opportunity)
    }

    const handleSubmit = (e) => {
        e.preventDefault();     
            axios.post(`${REACT_APP_SERVER_URL}/events`, opportunity)
            .then(response => {
                console.log('===> Yay, new Event');
                console.log(response);
                setRedirect(true);
            })
        }

    if (redirect) return <Redirect to="/organizations" /> // You can have them redirected to profile (your choice)

    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Create An Event</h2>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="eventName">Event Name</label>
                            <input onChange={handleChange} name="eventName" value="opportunity.eventName" />
                        </div>
                        <div>
                            <label htmlFor="eventLocation">Event Location</label>
                            <input onChange={handleChange} name="eventLocation" value="opportunity.eventLocation" />
                        </div>
                        <div>
                            <label htmlFor="eventDate">Event Date</label>
                            <input onChange={handleChange} name="eventDate" value="opportunity.eventDate" />
                        </div>
                        <div>
                            <label htmlFor="startTime">startTime</label>
                            <input onChange={handleChange} name="startTime" value="opportunity.startTime" />
                        </div>
                        <div>
                            <label htmlFor="endTime">startTime</label>
                            <input onChange={handleChange} name="endTime" value="opportunity.endTime" />
                        </div>
                        <div>
                            <label htmlFor="description">Description</label>
                            <input onChange={handleChange} name="description" value="opportunity.description" />
                        </div>

                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default OrgDetail;
