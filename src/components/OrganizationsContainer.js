// Imports
import React, { useState } from 'react';
import axios from 'axios';
import OppCreateForm from './OppCreateForm';
import logo from '../images/VolunTierLogo.png';
import {
    MDBContainer,
    MDBInput,
    MDBCardTitle
  }
  from 'mdb-react-ui-kit';

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
        
        
        <form onSubmit={handleSubmit}>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
            <div className="text-center">
                <img src={logo} alt="logo"/>
            </div>
            <MDBCardTitle className='fa-h5 fa-solid h1-responsive pt-3 m-5 text-center'>
                <h3 className=''> Please Register Your Organization</h3>
            </MDBCardTitle>
            <br />
            
            <MDBInput wrapperClass='mb-4' placeholder='Organization Name' id='formControlLg' type='name' size="lg" value={org.orgName} onChange={handleChange}/>
            <MDBInput wrapperClass='mb-4' placeholder='Email Address' id='formControlLg' type='email' size="lg" value={org.contactEmail} onChange={handleChange}/>
            <MDBInput wrapperClass='mb-4' placeholder='Contact Name' id='formControlLg' type='password' size="lg" value={org.contactPerson} onChange={handleChange}/>
            <MDBInput wrapperClass='mb-4' placeholder='Phone' id='formControlLg' type='password' size="lg" value={org.contactPhone} onChange={handleChange}/>
            <div className="d-flex justify-content-between mx-3 mb-4">
            
                
            </div>
        

            <button className="btn btn-success" size='lg'>Submit</button>
        </MDBContainer>
    </form>
    )
}

export default OrganizationsContainer;
