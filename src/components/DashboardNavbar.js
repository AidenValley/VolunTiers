import React from 'react';
import { NavLink, Route } from 'react-router-dom';

const DashboardNavbar = () => {
  return (
    <div className="navbar container-fluid">
      <div className="row">
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3 sidebar-sticky">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">
                            <span data-feather="home" className="align-text-bottom"></span>
                            Dashboard
                        </a>
                    </li>
                    <li className="nav-item">
                            <span data-feather="file" className="align-text-bottom"></span>
                            {/* <NavLink className="nav-link" exact to="/dashboardnavbar" component={DashboardNavbar}>Update Profile</NavLink> */}
                            {/* <Route path="/dashboardnavbar" component={DashboardNavbar} /> */}
                    </li>
                    <li className="nav-item">
                            <span data-feather="shopping-cart" className="align-text-bottom"></span>
                            Volunteer Opportunities
                    </li>
                    <li className="nav-item">
                        
                            <span data-feather="users" className="align-text-bottom"></span>
                            LeaderBoards
                        
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
                        
                            <span data-feather="file-text" className="align-text-bottom"></span>
                            More
                        
                    </li>
                    <li className="nav-item">
                        
                            <span data-feather="file-text" className="align-text-bottom"></span>
                            More
                        
                    </li>
                </ul>
            </div>
            </nav>
        </div>
      </div>
  )
}

export default DashboardNavbar;