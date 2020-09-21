const fs = require('fs');

class Ticket {
    constructor(number, desktop) {
        this.number = number;
        this.desktop = desktop;
    }
}

class TicketControl {
    constructor() {
        this.last = 0;
        this.today = new Date().getDate();
        this.tickets = [];
        this.lastFour = [];

        const data = require('../data/data');
        if (data.today === this.today) {
            this.last = data.last;
            this.tickets = data.tickets;
            this.lastFour = data.lastFour;
        } else {
            this.save();
        }
    }

    next() {
        this.last += 1;
        const ticket = new Ticket(this.last, '');
        this.tickets.push(ticket);
        this.save();

        return this.last;
    }

    getLast(){
        return this.last;
    }

    getLastFour(){
        return this.lastFour;
    }

    attendTicket(desktop) {
        if (this.tickets.length === 0) {
            return 'The is any tickets to attend'
        }

        const ticketNumber = this.tickets[0].number;
        this.tickets.shift();
        const attendTicket = new Ticket(ticketNumber,desktop);

        this.lastFour.unshift(attendTicket);

        if (this.lastFour.length > 4){
            this.lastFour.pop();
        }

        console.log("Last four: ", this.lastFour);

        this.save();

        return  attendTicket;
    }

    restart() {
        this.last = 0;
        this.tickets = [];
        this.lastFour = [];
        this.save();
    }

    save() {
        const jsonData = {
            last: this.last,
            today: this.today,
            tickets: this.tickets,
            lastFour: this.lastFour,
        };

        const jsonDataString = JSON.stringify(jsonData);
        fs.writeFileSync('./server/data/data.json', jsonDataString)
    }
}

module.exports = TicketControl;
