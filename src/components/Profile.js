import React from 'react';
import { NavLink, Link } from 'react-router-dom';
// import Userprofile from './components/Userprofile';
// import DashboardNavbar from './components/DashboardNavbar';

const Profile = (props) => {
   const { handleLogout, user } = props;
   const { id, name, email, exp, hours } = user;
   const expirationTime = new Date(exp * 1000);
   let currentTime = Date.now();
    
   // make a condition that compares exp and current time
   if (currentTime >= expirationTime) {
       handleLogout();
       alert('Session has ended. Please login to continue.');
   }

   const userData = user ?
   (<div></div>) : <h2>Loading...</h2>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    
    return (
        <><div className="text-center pt-4">
            {user ? userData : errorDiv()}
        </div>
        {/* <Route path="/dashboardnavbar" component={DashboardNavbar} /> */}
        <div className="navbar container-fluid">
            <div className="row">
                <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div className="position-sticky pt-3 sidebar-sticky">
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                    <span data-feather="home" className="align-text-bottom"></span>
                                    <NavLink className="nav-link" exact to="/profile" >Dashboard</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link" exact to="/userprofile" >Update Profile</NavLink>
                
                            </li>
                            <li className="nav-item">
                                    <span data-feather="shopping-cart" className="align-text-bottom"></span>
                                    <NavLink className="nav-link" exact to="/opportunities" >Volunteer Opportunities</NavLink>
                               
                            </li>
                            <li className="nav-item">
                                
                                    <span data-feather="users" className="align-text-bottom"></span>
                                    <NavLink className="nav-link" exact to="/board" >LeaderBoards</NavLink>
                            </li>
                            <li className="nav-item">
                                
                                    <span data-feather="bar-chart-2" className="align-text-bottom"></span>
                                    Reviews
                              
                            </li>
                            <li className="nav-item">
                               
                                    <span data-feather="layers" className="align-text-bottom"></span>
                                    Contact Us
                                
                            </li>
                        </ul>
                        <ul className="nav flex-column mb-2">
                            <li className="nav-item">
                                
                                    <span data-feather="file-text" className="align-text-bottom"></span>
                                    More
                                
                            </li>
                            <li className="nav-item">
                                
                                    <span data-feather="file-text" className="align-text-bottom"></span>
                                    More
                              
                            </li>
                            <li className="nav-item">
                                <a class="nav-link" href="#">
                                    <span data-feather="file-text" class="align-text-bottom"></span>
                                    More
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <span data-feather="file-text" className="align-text-bottom"></span>
                                    More
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">Your Dashboard</h1>
                        <div className="btn-toolbar mb-2 mb-md-0">
                            <div className="btn-group me-2">
                                <button type="button" className="btn btn-sm btn-outline-secondary">Past</button>
                                <button type="button" className="btn btn-sm btn-outline-secondary">Current</button>
                            </div>
                            <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                <span data-feather="calendar" class="align-text-bottom"></span>
                                More Volunteers
                            </button>
                        </div>
                    </div>
                    <span className="portfolio-item d-block">
                        <div className="foto">
                            <h2>Hi, {name}</h2>
                            <h5> Email: {email} ID: {id} </h5>
                        </div>
                        <br/>
                            <div className='container'>
                                <div className='container'>
                                    <div className="row text-center">
                                        <div className="col border border-info">
                                            <h4>Total Service Hours: {hours} </h4> 
                                
                                        </div>
                                        <div className="col border border-info">
                                            <h3>Name: {name} </h3>
                                            
                                        </div>
                                        <div className="col border border-info">
                                            <h3>Name: {name} </h3>
                                            
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='container'>
                                    <div className='container'>
                                        <div className="text-center">
                                            <div className="col border border-info">
                                                <h3>Name: {name} </h3>
                                                
                                            </div>
                                            <div className="col border border-info">
                                                <h3>Name: {name} </h3>
                                               
                                            </div>
                                            <div className="col border border-info">
                                                <h3>Name: {name} </h3>
                                                
                                            </div>               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                    </span>
                </main>
            </div>
        </div></>
    );

}

export default Profile;