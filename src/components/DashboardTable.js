import React from 'react';
import { MDBCard, MDBCardBody, MDBTable, MDBTableBody, MDBTableHead, MDBRow, MDBCol } from 'mdbreact';

const TableSection = () => {
  return (
    <MDBRow className="mb-4">
          <MDBCol md="6">
              <MDBCard>
                  <MDBCardBody>
                    <MDBTable hover>
                      <MDBTableHead color="blue-grey lighten-4">
                        <tr>
                          <th>#</th>
                          <th>event</th>
                          <th>event</th>
                          <th>event</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        <tr>
                          <td>1</td>
                          <td>event</td>
                          <td>event</td>
                          <td>@event</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>event</td>
                          <td>event</td>
                          <td>@event</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>event</td>
                          <td>the event</td>
                          <td>@event</td>
                        </tr>
                      </MDBTableBody>
                    </MDBTable>
                  </MDBCardBody>
              </MDBCard>
          </MDBCol>
          <MDBCol md="6" className="mb-4">
              <MDBCard>
                  <MDBCardBody>
                    <MDBTable hover>
                      <MDBTableHead color="blue lighten-4">
                        <tr>
                          <th>event</th>
                          <th>event</th>
                          <th>event</th>
                          <th>event</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        <tr>
                          <td>event</td>
                          <td>event</td>
                          <td>event</td>
                          <td>@event</td>
                        </tr>
                        <tr>
                          <td>event</td>
                          <td>event</td>
                          <td>event</td>
                          <td>@event</td>
                        </tr>
                        <tr>
                          <td>event</td>
                          <td>event</td>
                          <td>event event</td>
                          <td>@event</td>
                        </tr>
                      </MDBTableBody>
                    </MDBTable>
                  </MDBCardBody>
              </MDBCard>
          </MDBCol>
      </MDBRow>
  )
}

export default TableSection;
