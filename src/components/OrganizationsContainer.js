// Imports
import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const { REACT_APP_SERVER_URL } = process.env;

const OrganizationsContainer = () => {
    const [orgName, setOrgName] = useState('');
    const [contactPerson, setContactPerson] = useState('');
    const [contactEmail, setContactEmail] = useState('');
    const [contactPhone, setContactPhone] = useState('');
    const [redirect, setRedirect] = useState(false);

    const handleOrgName = (e) => {
        setOrgName(e.target.value);
    }

    const handleContactPerson = (e) => {
        setContactPerson(e.target.value);
    }

    const handleContactEmail = (e) => {
        setContactEmail(e.target.value);
    }

    const handleContactPhone = (e) => {
        setContactPhone(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // at the beginning of a submit function
        // make sure password and confirm password are equal
        // password length >= 8 characters     
            const newOrganization = { orgName, contactPerson, contactEmail, contactPhone };
            axios.post(`${REACT_APP_SERVER_URL}/organizations`, newOrganization)
            .then(response => {
                console.log('===> Yay, new organization');
                console.log(response);
                setRedirect(true);
            })
        }

    if (redirect) return <Redirect to="/organizations" /> // You can have them redirected to profile (your choice)

    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Organization Signup</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="orgName">Organization Name</label>
                            <input type="text" name="orgName" value={orgName} onChange={handleOrgName} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contactEmail">Email</label>
                            <input type="email" name="contactEmail" value={contactEmail} onChange={handleContactEmail} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contactPerson">Contact Name</label>
                            <input type="text" name="contactPerson" value={contactPerson} onChange={handleContactPerson} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="contactPhone">Phone</label>
                            <input type="text" name="contactPhone" value={contactPhone} onChange={handleContactPhone} className="form-control"/>
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default OrganizationsContainer;
