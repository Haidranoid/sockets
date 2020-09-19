const {socketServer} = require('./../server');
const TicketControl = require('../classes/TicketControl');

const ticketControl = new TicketControl();

socketServer.on('connection', socketClient => {
    socketClient.on('generateTicket', (data, callback) => {
        let next = ticketControl.next();
        console.log('Ticker Nº: ', next);
        callback(next)
    });

    socketClient.emit('currentTicket', ticketControl.last)
});
