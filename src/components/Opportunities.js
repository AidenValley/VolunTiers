import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
} from "mdb-react-ui-kit";

const { REACT_APP_SERVER_URL } = process.env;

const Opportunities = () => {
  const [opportunities, setOpportunity] = useState([]);
  useEffect(async () => {
    await fetchOpportunity();
  }, []);

  useEffect(() => {
    console.log(opportunities);
  }, [opportunities]);

  const fetchOpportunity = async () => {
    const response = await axios.get(`${REACT_APP_SERVER_URL}/opportunities`);
    setOpportunity(response.data.opportunities);
  };

  return (
    <MDBRow>
      <MDBCol sm="6">
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>
              <h1 className="opportunities">Available Opportunities </h1>
            </MDBCardTitle>
            <MDBCardTitle>
              <ul className="">
                {opportunities.map((opportunities) => {
                  return (
                    <li className="nav-item" key={opportunities.id}>
                      <NavLink
                        className="nav-link"
                        to={{
                          pathname: "/opportunitiesdetail",
                          state: { opportunities },
                        }}
                      >
                        {opportunities.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};
export default Opportunities;
