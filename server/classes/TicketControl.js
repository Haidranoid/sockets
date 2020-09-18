const fs = require('fs');

class TicketControl {
    constructor() {
        this.last = 0;
        this.today = new Date().getDate();

        const data = require('../data/data');
        if (data.today === this.today) {
            this.last = data.last;
        } else {
            this.save();
        }
    }

    next() {
        this.last += 1;
        this.save();

        return this.last;
    }

    restart() {
        this.last = 0;
        this.save();
    }

    save() {
        const jsonData = {
            last: this.last,
            today: this.today,
        };

        const jsonDataString = JSON.stringify(jsonData);
        fs.writeFileSync('./server/data/data.json', jsonDataString)
    }
}

module.exports = TicketControl;
