import React, { useEffect, useState } from 'react'
import axios from 'axios';
const { REACT_APP_SERVER_URL } = process.env;

const Board = () => {
    const [leaders, setLeaders] = useState([]);

    useEffect(() => {
        fetchLeaders();
    }, [])
    useEffect(() => {
        console.log(leaders);
    }, [leaders])

    const fetchLeaders = async () => {
        const response = await axios.get(`${REACT_APP_SERVER_URL}/users/leaders`)
        setLeaders(response.data);
    }


    return (
        <div className="board">
            <h1 className='leaderboard'>Top Tier Volunteers</h1>

            <div style={{ alignItems: 'center', margin: '20px 60px' }}>
                <ul>
                    {
                        leaders.map((leader) => {
                            return <li key={leader.id}>{ leader.name } - {leader.hours }</li>
                        })
                    }
                </ul>
            </div>


        </div>
    );
}

export default Board;