import React, { useEffect, useState } from 'react'
import axios from 'axios';
const { REACT_APP_SERVER_URL } = process.env;

const Past = () => {
  const [pastOpp, setPastOpp] = useState([]);

  useEffect(async () => {
    await fetchPastOpp();
  }, [])

  useEffect(() => {
    console.log(pastOpp)
  }, [pastOpp])

  const fetchPastOpp = async () => {
    const response = await axios.get(`${REACT_APP_SERVER_URL}/opportunities/past`)
    setPastOpp(response.data.opportunities);
  }


  return (
    <div className="row mt-4">
      <div className="col-md-7 offset-md-3">
        <div className="card card-body">
          <h2 className="py-2"></h2>
          <div>
            <h3>Past Opportunities</h3>
            <ul>
              {
                pastOpp.map((past) => {
                  return <li className='past' key={past.id}>
                    <p className='highlight'>{past.users.length} Voluntiers helped make this event a success!</p>
                    <h2>{past.name}</h2>
                    <h4>{`${new Date(past.date).getMonth() + 1}-${new Date(past.date).getDate()}-${new Date(past.date).getFullYear()}`}</h4>
                    <h4>{past.startTime} until {past.endTime}</h4>
                    <h5>{past.description}</h5>
                  </li>
                })

              }
            </ul>

          </div>
        </div>
      </div>
    </div>
  );
}
export default Past;