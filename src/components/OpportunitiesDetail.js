import React, { useState, useEffect, useSyncExternalStore } from 'react';
import { useLocation } from 'react-router-dom';
import setAuthToken from "../utils/setAuthToken";
import axios from 'axios';
import Hours from './Hours';

const { REACT_APP_SERVER_URL } = process.env;

const OpportunitiesDetail = (user) => {
    let location = useLocation();
    const data = location.state;
    const userData = user;
    const [isregistered, setIsRegistered] = useState(false);
    const [profile, setProfile] = useState([]);

    console.log("This is the data>>>>>>>>>", data);
    console.log("Did the User info get passed????", user);

    useEffect(() => {
        renderProfiles();
    }, []);

    useEffect(() => {
        console.log(profile);
    }, [profile]);

    const renderProfiles = async () => {
        setAuthToken(localStorage.getItem("jwtToken"));
        const response = await axios.get(`${REACT_APP_SERVER_URL}/users/profile`);
        setProfile(response.data);
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`------>TESTERT ${profile.email}`);
        console.log(profile);
        console.log(`%%%%%%%%%%%%%%%%%%%%%%%%%% ${data.opportunities._id}`);
        axios.put(`${REACT_APP_SERVER_URL}/opportunities/register/${data.opportunities._id}`, { email: `${profile.email}` })
            //need to push userid into users array in Opportunity 
            .then(response => {
                console.log('===> Yay, update was made');
                console.log(response);
                setIsRegistered(true);

            })
            .catch(error => console.log('===> Error in Submission', error));
    }

    const handleDelete = (e) => {
        e.preventDefault();
        console.log(`------>TESTERT ${profile.email}`);
        console.log(profile);
        console.log(`%%%%%%%%%%%%%%%%%%%%%%%%%% ${data.opportunities._id}`);
        axios.put(`${REACT_APP_SERVER_URL}/opportunities/remove/${data.opportunities._id}`, { email: `${profile.email}` })
            .then(response => {
                console.log('===> User is no longer registered');
                console.log(response);
                setIsRegistered(false);

            })
            .catch(error => console.log('===> Error in Submission', error));
    }

    if (isregistered) {

        return (<div>
            <div>
                <h3>You are registered for </h3>
                <h2>{data.opportunities.name}</h2>
                <h4>{`${new Date(data.opportunities.date).getMonth() + 1}-${new Date(data.opportunities.date).getDate()}-${new Date(data.opportunities.date).getFullYear()}`}</h4>
                <h4>{data.opportunities.startTime} until {data.opportunities.endTime}</h4>
                <h5>{data.opportunities.description}</h5>
            </div>
                <Hours need = {data} user = {profile}/>
            <div>
            <button onClick={handleDelete} className="btn btn-primary float-right">Unregister</button>
            </div>
        </div>)
    }

    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2"></h2>
                    <div>
                        <h3>Make a World of Difference...</h3>
                        <h3>Volunteer for</h3>
                        <h2>{data.opportunities.name}</h2>
                        <h4>{`${new Date(data.opportunities.date).getMonth() + 1}-${new Date(data.opportunities.date).getDate()}-${new Date(data.opportunities.date).getFullYear()}`}</h4>
                        <h4>{data.opportunities.startTime} until {data.opportunities.endTime}</h4>
                        <h5>{data.opportunities.description}</h5>

                        <div>
                            <button type="submit" onClick={handleSubmit} className="btn btn-primary float-right">Register Now!</button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpportunitiesDetail;