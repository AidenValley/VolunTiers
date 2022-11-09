// Imports
import React, { useState } from 'react';
import axios from 'axios';
import OppCreateForm from './OppCreateForm';
const { REACT_APP_SERVER_URL } = process.env;

const OrganizationsContainer = () => {
    const [org, setOrg] = useState({
        orgName: "",
        contactPerson: "",
        contactEmail: "",
        contactPhone: ""
    });


    const [created, setCreated] = useState(false)

    const handleChange = (e) => {
        setOrg({ ...org, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newOrganization = org;
        axios.post(`${REACT_APP_SERVER_URL}/organizations/`, newOrganization)
            .then(response => {
                console.log('===> Yay, new organization');
                console.log(response);
                setCreated(true);
                setOrg(response.data.organizations)
            })
    }

    if (created) {

        return (<div>
            <h1>Welcome, {org.orgName}!</h1>
            <p>You can create an event or look at who's registered for your event here.</p>
            <div>
                <OppCreateForm org={org._id} />
            </div>
        </div>)
    }


    return (
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
                            <input type="text" name="orgName" value={org.orgName} onChange={handleChange} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contactEmail">Email</label>
                            <input type="email" name="contactEmail" value={org.contactEmail} onChange={handleChange} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contactPerson">Contact Name</label>
                            <input type="text" name="contactPerson" value={org.contactPerson} onChange={handleChange} className="form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contactPhone">Phone</label>
                            <input type="text" name="contactPhone" value={org.contactPhone} onChange={handleChange} className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default OrganizationsContainer;
