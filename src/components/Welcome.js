import React, {useEffect, useState } from 'react';
import {
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBContainer,
    MDBIcon,
    MDBCollapse,
    MDBBtn,
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';

const Welcome = () => {
    const [showBasic, setShowBasic] = useState(false);
    return (
            <MDBCarousel showControls fade>
              <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src='https://students.1fbusa.com/hubfs/25%20Ways%20to%20Volunteer%20in%20Your%20Community.jpg'
                alt='...'
              >
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </MDBCarouselItem>
        
              <MDBCarouselItem
                className='w-100 d-block'
                itemId={2}
                src='https://www.oceans-research.com/wp-content/uploads/2022/01/Short-term.jpg'
                alt='...'
              >
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </MDBCarouselItem>
        
              <MDBCarouselItem
                className='w-100 d-block'
                itemId={3}
                src='https://extension.umn.edu/sites/extension.umn.edu/files/styles/crop_banner_image_crop/public/kids-volunteering.jpg?h=3418dd7a&itok=UqGkYkuZ'
                alt='...'
              >
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </MDBCarouselItem>
            </MDBCarousel>
    );
}

export default Welcome;