import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { NavLink } from 'react-router-dom';
const { REACT_APP_SERVER_URL } = process.env;

const Opportunities = () => {
    const [opportunities, setOpportunity] = useState([]);
    useEffect(async () => {
        await fetchOpportunity();
    }, [])

    useEffect(() => {
        console.log(opportunities)
    }, [opportunities])

    const fetchOpportunity = async () => {
        const response = await axios.get(`${REACT_APP_SERVER_URL}/opportunities`)
        setOpportunity(response.data.opportunities);
    }

    
    return (
        <div className="board">
            <h1 className='opportunities'>Opportunities Available</h1>
        
            <div style={{ alignItems: 'center', margin: '20px 60px' }}>
                <ul>
                    {
                        opportunities.map((opportunities) => {
                            return <li className="nav-item" key={opportunities.id}>
                                <NavLink className="nav-link" to={{
                                    pathname: "/opportunitiesdetail",
                                    state: { opportunities }
                                }}>
                                    {opportunities.name}
                                </NavLink>

                            </li>

                        })
                    }
                </ul>
            </div>
        </div>
    );
}
export default Opportunities;