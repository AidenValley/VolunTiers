import React, { useEffect, useState } from 'react'
import axios from 'axios';
const { REACT_APP_SERVER_URL } = process.env;

const Opportunities = () => {
    const [opportunities, setOpportunity] = useState([]);

    useEffect(() => {
        fetchOpportunity();
    }, [])
    useEffect(() => {
        console.log(opportunities)
    }, [opportunities])

    const fetchOpportunity = async () => {
        const response = await axios.get(`${REACT_APP_SERVER_URL}/users/opportunities`)
        setOpportunity(response.data);
    }


    return (
        <div className="board">
            
            <h1 className='opportunities'>Opportunities Available</h1>
            <input type='text' placeholder='Search...' />
            <div style={{ alignItems: 'center', margin: '20px 60px' }}>
                <ul>
                    {
                        opportunities.map((opportunities) => {
                            return <li key={opportunities.id}>{ opportunities.name }</li>
                        })
                    }
                </ul>
            </div>


        </div>
    );
}

export default Opportunities;