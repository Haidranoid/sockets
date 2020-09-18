const {io} = require('./../server');

io.on('connection', client => {
    console.log("User connected");

    client.emit('message', {
        user: 'Administrator',
        message: 'Welcome to this application'
    });

    client.on('disconnect', () => {
        console.log("User disconnected");
    });

    client.on('message', (payload, callback) => {
        console.log(payload);

        client.broadcast.emit('message', payload)

        /*if (payload.user) {
            callback({
                ok: true,
            })
        } else {
            callback({
                ok: false,
                message: "Something went wrong"
            })
        }*/
    })
});
