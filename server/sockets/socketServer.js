const {socketServer} = require('./../server');
const TicketControl = require('../classes/TicketControl');

const ticketControl = new TicketControl();

socketServer.on('connection', client => {
    client.on('generateTicket', (data, callback) => {
        let next = ticketControl.next();
        console.log('Ticker Nº: ', next);
        callback(next)
    });

    client.on('attendTicket', (data, callback) => {
        if (!data.desktop) {
            return callback({
                err: true,
                message: 'Desktop required'
            })
        }

        const attendTicket = ticketControl.attendTicket(data.desktop);
        client.broadcast.emit('updateViewer',{
            current: ticketControl.getLast(),
            lastFour: ticketControl.getLastFour(),
        });
        callback(null, attendTicket);
    });

    client.emit('currentTicket', {
        current: ticketControl.getLast(),
        lastFour: ticketControl.getLastFour(),
    })
});
