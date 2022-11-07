import React from 'react';
import { useLocation } from 'react-router-dom';
const { REACT_APP_SERVER_URL } = process.env;

const OpportunitiesDetail = () => {
    let location = useLocation();
    const data = location.state;
    console.log("This is the data>>>>>>>>>", data);



    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2"></h2>
                    <div>
                        <h3>Make a World of Difference...</h3>
                        <h3>Volunteer for</h3>
                       <h2>{data.opportunities.name}</h2>
                       <h4>{`${new Date(data.opportunities.date).getMonth() +1}-${new Date(data.opportunities.date).getDate()}-${new Date(data.opportunities.date).getFullYear()}`}</h4>
                       <h4>{data.opportunities.startTime} until {data.opportunities.endTime}</h4>
                       <h5>{data.opportunities.description}</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OpportunitiesDetail;