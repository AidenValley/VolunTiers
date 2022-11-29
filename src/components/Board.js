import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBCard,
  MDBListGroup,
  MDBListGroupItem,
  MDBCardTitle,
} from "mdb-react-ui-kit";
import logo from "../images/VolunTierLogo.png";
const { REACT_APP_SERVER_URL } = process.env;

const Board = () => {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetchLeaders();
  }, []);
  useEffect(() => {
    console.log(leaders);
  }, [leaders]);

  const fetchLeaders = async () => {
    const response = await axios.get(`${REACT_APP_SERVER_URL}/users/leaders`);
    setLeaders(response.data);
  };

  return (
    <div className="board">
      <h1 className="leaderboard text-center">
         Top Tier Volunteers{" "}
      </h1>
      <MDBCard>
        <MDBListGroup flush>
          <MDBListGroupItem>
            {leaders.map((leader) => {
              return (
                <ol key={leader.id}>
                  <span class="fa fa-star checked"></span><strong>{leader.name} </strong> - {leader.hours} hours
                </ol>
              );
            })}
          </MDBListGroupItem>
        </MDBListGroup>
      </MDBCard>
    </div>
  );
};

export default Board;
