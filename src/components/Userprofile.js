import React, {useEffect, useState}from 'react';
// import { NavLink, Link, Redirect } from 'react-router-dom';
import DashboardNavbar from './DashboardNavbar';
import Profile from'./Profile';
import axios from 'axios';
const { REACT_APP_SERVER_URL } = process.env;


const Userprofile = (props) => {
    const [userProfiles, setProfile] = useState([]);

    // useEffect(() => {
    //     axios.get(`${REACT_APP_SERVER_URL}/userProfile`)
    //     .then(response => {
    //         console.log(response.data);
    //         setProfile(response.data.userProfile);
    //     })
    // }, [])

    useEffect(() => {
        renderProfiles();
    }, [])
    useEffect(() => {
        console.log(userProfiles)
    }, [userProfiles])
    
    const renderProfiles = async () => {
        const response = await axios.get(`${REACT_APP_SERVER_URL}/userprofile`)
        setProfile(response.data);
    }
    // const renderProfiles = () => {
    //     if (userProfile.length) {
    //         let profileArray = userProfile.map((p, idx) => <Profile p={p} key={idx} />)
    //         return profileArray
    //     } else {
    //         return <h1>There are no Profiles</h1>
    //     }
    // }

  return (
    
    <div className=" pt-4">
         <DashboardNavbar />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        
                        <h1 className="h2">Your Profile</h1>
                        <div className="btn-toolbar mb-2 mb-md-0">
                            <div className="btn-group me-2">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Past</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Current</button>
                            </div>
                            <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                <span data-feather="calendar" className="align-text-bottom"></span>
                                More Volunteers
                            </button>
                        </div>
                    </div>
                    <span className="portfolio-item d-block">
                        <div className="foto">
                            
                        </div>
                        <br/>
                            <div className='container'>
                                <div className='container'>
                                    <div className="row text-center">
                                        <div className="col border border-info">
                                            <h4>Name:  </h4> 
                                        </div>
                                        <div className="col border border-info">
                                            <h4>Email:  </h4>
                                        </div>
                                        <div className="col border border-info">
                                            <h4>ID: </h4>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='container'>
                                    <div className='container'>
                                        <div className="row text-center">
                                            <div className="col border border-info">
                                                <h4> Member Since,  </h4> 
                                                <h5>
                                                {
                                                userProfiles.map((userProfile) => {
                                                return <li key={userProfile.id}>{ userProfile.name } - {userProfile.hours }</li>
                                                })
                                                    }
                                                </h5>
                                            </div>
                                            <div className="col border border-info">
                                                <h4>Current Position: </h4>
                                            </div>
                                            <div className="col border border-info">
                                                <h4>Total Service Hours:</h4>
                                            </div>               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    </span>
                </main>
        </div>  
      
  )
}

export default Userprofile;