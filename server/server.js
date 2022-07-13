var app = require('express')();
var http = require('http').createServer(app);
const PORT = 8080;
var io = require('socket.io')(http, {
    cors: {
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: 'Content-Type, Authorization, X-Requested-With, X-CSRF-Token, Origin, Accept, Accept-Language, Accept-Encoding, Accept-Datetime, Cache-Control, Connection, Content-Length, Cookie, Date, DNT, Pragma, Trailer, Transfer-Encoding, Upgrade, User-Agent, Via, X-Forwarded-For',
        credentials: true,
    }
});
const STATIC_CHANNELS = ['global_notifications', 'global_chat'];

http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});

io.on('connection', (socket) => {
    console.log('new client connected');
    socket.emit('connection', null);
});