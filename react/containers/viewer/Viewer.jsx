import React, {useEffect, useReducer, useState} from 'react';

const socketClient = require('socket.io-client')('http://localhost:3000');

const Viewer = () => {
    const [labels, setLabels] = useState(['', '', '', '']);
    const [desktops, setDesktops] = useState(['', '', '', '']);

    useEffect(() => {
        socketClient.on('currentTicket', payload => {
            updateHTML(payload.lastFour);
        });
        socketClient.on('updateViewer', payload => {
            const audio = new Audio('react/static/audio/new-ticket.mp3');
            audio.play();
            updateHTML(payload.lastFour)
        })
    }, []);

    const updateHTML = lastFour => {
        let updatedDesktops = [];
        let updatedLabels = [];

        lastFour.map((ticket, index) => {
            updatedLabels[index] = ticket.number;
            updatedDesktops[index] = ticket.desktop;
        });
        setLabels(updatedLabels);
        setDesktops(updatedDesktops);
    };
    return (
        <div>
            <table>
                <tr>
                    {console.log(labels[0])}
                    <td valign="middle" className="ticket-actual">
                        <span
                            className="ticket-actual-numero">{labels[0] !== '' ? `Ticket ${labels[0]}` : 'Espere...'}</span>
                        <br/>
                        <span
                            className="ticket-actual-escritorio">{desktops[0] !== '' ? `Escritorio ${desktops[0]}` : ''}</span>
                    </td>
                    <td>
                        <table>
                            <tr>
                                <td>
                                    <span
                                        className="ticket-secundario">{labels[1] !== '' ? `Ticket ${labels[1]}` : ''}</span>
                                    <br/>
                                    <span>{desktops[1] !== '' ? `Escritorio ${desktops[1]}` : ''}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span
                                        className="ticket-secundario">{labels[2] !== '' ? `Ticket ${labels[2]}` : ''}</span>
                                    <br/>
                                    <span>{desktops[2] !== '' ? `Escritorio ${desktops[2]}` : ''}</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span
                                        className="ticket-secundario">{labels[3] !== '' ? `Ticket ${labels[3]}` : ''}</span>
                                    <br/>
                                    <span>{desktops[3] !== '' ? `Escritorio ${desktops[3]}` : ''}</span>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    );
};


export default Viewer;
