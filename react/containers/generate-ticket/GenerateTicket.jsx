import React, {useEffect, useState} from 'react';
const socketClient = require('socket.io-client')('http://localhost:3000');

const GenerateTicket = () => {
    const [ticketNumber, setTicketNumber] = useState('');

    useEffect(() => {
        socketClient.on('currentTicket', payload => {
            setTicketNumber(payload.current);
        });
    });

    const handleGenerateTicket = e => {
        socketClient.emit('generateTicket', null, ticketNumber => {
            setTicketNumber(ticketNumber)
        });
    };

    return (
        <div>
            <table>
                <tr>
                    <td>
                        <span id="lblNuevoTicket">{ticketNumber ? ticketNumber : 'loading...'}</span>
                    </td>
                </tr>
                <tr>
                    <td>
                        <button className="btn btn-secondary btn-lg" onClick={handleGenerateTicket}>
                            Generar nuevo ticket
                        </button>
                    </td>
                </tr>
            </table>
        </div>
    );
};


export default GenerateTicket;
