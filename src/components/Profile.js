import React from 'react';
import { Link } from 'react-router-dom';
import Userprofile from './Userprofile';

const Profile = (props) => {
   const { handleLogout, user } = props;
   const { id, name, email, exp } = user;
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

        <div class="container-fluid">
            <div class="row">
                <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                    <div class="position-sticky pt-3 sidebar-sticky">
                        <ul class="nav flex-column">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">
                                    <span data-feather="home" class="align-text-bottom"></span>
                                    Dashboard
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./userprofile">
                                    <span data-feather="file" class="align-text-bottom"></span>
                                    Profile
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <span data-feather="shopping-cart" class="align-text-bottom"></span>
                                    Volunteer Opportunities
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <span data-feather="users" class="align-text-bottom"></span>
                                    LeaderBoards
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <span data-feather="bar-chart-2" class="align-text-bottom"></span>
                                    Reviews
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <span data-feather="layers" class="align-text-bottom"></span>
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                        <ul class="nav flex-column mb-2">
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <span data-feather="file-text" class="align-text-bottom"></span>
                                    More
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <span data-feather="file-text" class="align-text-bottom"></span>
                                    More
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <span data-feather="file-text" class="align-text-bottom"></span>
                                    More
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    <span data-feather="file-text" class="align-text-bottom"></span>
                                    More
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 class="h2">Your Dashboard</h1>
                        <div class="btn-toolbar mb-2 mb-md-0">
                            <div class="btn-group me-2">
                                <button type="button" class="btn btn-sm btn-outline-secondary">Past</button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">Current</button>
                            </div>
                            <button type="button" class="btn btn-sm btn-outline-secondary dropdown-toggle">
                                <span data-feather="calendar" class="align-text-bottom"></span>
                                More Volunteers
                            </button>
                        </div>
                    </div>
                    <span className="portfolio-item d-block">
                        <div className="foto">
                            <h2>Hi, {name}</h2>
                        </div>
                        <br/>
                            <div className='container'>
                                <div className='container'>
                                    <div className="row text-center">
                                        <div className="col border border-info">
                                            <strong><em>Profile</em></strong>
                                            <h3>Name: {name} </h3>
                                            <p>Email: {email} </p>
                                            <p>Current Position: </p>
                                            <p>Total Service Hours: </p>
                                            <p>ID: {id} </p>
                                        </div>
                                        <div className="col border border-info">
                                            <h3>Name: {name} </h3>
                                            <p>Email: {email} </p>
                                            <p>ID: {id} </p>
                                        </div>
                                        <div className="col border border-info">
                                            <h3>Name: {name} </h3>
                                            <p>Email: {email} </p>
                                            <p>ID: {id} </p>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='container'>
                                    <div className='container'>
                                        <div className="text-center">
                                            <div className="col border border-info">
                                                <h3>Name: {name} </h3>
                                                <p>Email: {email} </p>
                                                <p>ID: {id} </p>
                                            </div>
                                            <div className="col border border-info">
                                                <h3>Name: {name} </h3>
                                                <p>Email: {email} </p>
                                                <p>ID: {id} </p>
                                            </div>
                                            <div className="col border border-info">
                                                <h3>Name: {name} </h3>
                                                <p>Email: {email} </p>
                                                <p>ID: {id} </p>
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