import React from 'react';

const Viewer = () => {
    return (
        <div>
            <table>
                <tr>
                    <td valign="middle" className="ticket-actual">
                        <span id="lblTicket1" className="ticket-actual-numero">Ticket W</span>
                        <br/>
                        <span id="lblEscritorio1" className="ticket-actual-escritorio">Escritorio W</span>
                    </td>
                    <td>
                        <table>
                            <tr>
                                <td>
                                    <span id="lblTicket2" className="ticket-secundario">Ticket X</span>
                                    <br/>
                                    <span id="lblEscritorio2">Escritorio X</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span id="lblTicket3" className="ticket-secundario">Ticket Y</span>
                                    <br/>
                                    <span id="lblEscritorio3">Escritorio Y</span>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <span id="lblTicket4" className="ticket-secundario">Ticket Z</span>
                                    <br/>
                                    <span id="lblEscritorio4">Escritorio Z</span>
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
