import React, {useState} from 'react';
import queryString from 'query-string'
import {useLocation, useHistory} from 'react-router-dom'

const socketClient = require('socket.io-client')('http://localhost:3000');

const Desktop = () => {
    const history = useHistory();
    const location = useLocation();
    const [ticketNumber, setTicketNumber] = useState('');

    const parsed = queryString.parse(location.search);
    if (!parsed.desktop) history.push('/');


    const handleAttendTicket = e => {
        socketClient.emit('attendTicket', {desktop: parsed.desktop}, (err, res) => {
            if (err) throw err;

            if (res === 'The is any tickets to attend') {
                alert(res);
                return;
            }

            setTicketNumber(res.number);
            console.log(res);
        })
    };

    return (
        <div>
            <h1>Escritorio {parsed.desktop}</h1>
            <h4>Atendiendo a <small>{ticketNumber}</small></h4>

            <button className="btn btn-primary" onClick={handleAttendTicket}>
                Atender siguiente ticket
            </button>
        </div>
    );
};


export default Desktop;
