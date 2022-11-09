import React, { useState, useEffect } from 'react';
import setAuthToken from "../utils/setAuthToken";
import axios from 'axios';
import {
  MDBCard,
  MDBCardBody,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBRow,
  MDBCol,
} from "mdbreact";

const { REACT_APP_SERVER_URL } = process.env;

const TableSection = () => {
  const [opportunities, setOpportunities] = useState([]);
  useEffect(async () => {
      await renderOpportunities();
  }, [])

  useEffect(() => {
    console.log(opportunities);
  }, [opportunities]);

  const renderOpportunities = async () => {
    setAuthToken(localStorage.getItem("jwtToken"));
    const response = await axios.get(`${REACT_APP_SERVER_URL}/opportunities`);
    setOpportunities(response.data.opportunities);
  };

  return (
    <MDBRow className="mb-4">
      <MDBCol md="6">
        <MDBCard>
          <MDBCardBody>
            <MDBTable hover>
              <MDBTableHead color="blue-grey lighten-4">
                <h5><strong>Current Volunteering Opportunities</strong></h5>
              </MDBTableHead>
              <MDBTableBody><strong>
              {
                        opportunities.map((opportunities) => {
                            return <li className="nav-item" key={opportunities.id}>
                                    {opportunities.name}
                            </li>
                        })
                    }
                </strong></MDBTableBody>
            </MDBTable>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol md="6" className="mb-4">
        <MDBCard>
          <MDBCardBody>
            <MDBTable hover>
              <MDBTableHead color="blue lighten-4">
                <strong>Past Volunteering Opportunities</strong>
              </MDBTableHead>
              <MDBTableBody></MDBTableBody>
            </MDBTable>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
};

export default TableSection;
