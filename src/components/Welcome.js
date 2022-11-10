import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';

const Welcome = () => {
    return (
            <MDBCarousel showControls fade>
              <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src='https://students.1fbusa.com/hubfs/25%20Ways%20to%20Volunteer%20in%20Your%20Community.jpg'
                alt='...'
              >
                <h5><strong>Plant A Tree</strong></h5>
                <h6><strong>Join us on this special event we will be contributing to help make a greener Earth and help plant more trees!</strong></h6>
              </MDBCarouselItem>
        
              <MDBCarouselItem
                className='w-100 d-block'
                itemId={2}
                src='https://www.oceans-research.com/wp-content/uploads/2022/01/Short-term.jpg'
                alt='...'
              >
                <h5><strong>Recycle Together!</strong></h5>
                <h6><strong>Help in recycle and contribute to the cause of a greener community!</strong></h6>
              </MDBCarouselItem>
        
              <MDBCarouselItem
                className='w-100 d-block'
                itemId={3}
                src='https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/transport-dog-458193.jpg?h=1fd6adb6&itok=UMDoZwpR'
                alt='...'
              >
                <h5><strong>Help an animal in need</strong></h5>
                <h6><strong>Help with feeding, playing and caaring for an animal in need!</strong></h6>
              </MDBCarouselItem>
            </MDBCarousel>
            
    );
}

export default Welcome;