var express = require('express');
var http = require('http');
var app = express();

var server = http.createServer(app);
const PORT = 8080;

server.listen(PORT, () => {
    console.log('Server listen on port ' + PORT);
});
