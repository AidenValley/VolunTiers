import React ,{ useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OpportunityDetail = () => {
    const {eventId}=useParams();

    const [event, setEvent]=useState({});
    useEffect(() => {
        // axios.get(`${REACT_APP_SERVER_URL}/event/${eventId}`)
        // .then(response => {
        //     setPersons(response.data.company);
        // })
        // .catch(error => console.log(error));
        setEvent({
            _id: {
                $oid:'test id'  
            },
            name: 'James',
            date: new Date().toISOString(),

            location: 'Houston',
            
            startTime: '1:00pm',
            endTime: '3:00pm',
            users: [{
                name: 'John',
                email: 'john@gmail.com',
                phone: '8323295555',
                password: 'johnsworld',
                role: 0,
                date: new Date().toISOString(),
            }],
            organization:{
                name: 'Wally',
                contactPerson: 'Adam',
                contactEmail: 'adam@gmail.com',
                contactPhone: '8323296666',
                createdAt: 'Houston'
            }

        })
    }, [])

    return (
        <div>
            {eventId}
            {event.name}
        </div>
    )
}

export default OpportunityDetail;