//code goes here
var express = require('express');
var app = express();
var http = require('http').createServer(app);
var path = require('path');
const io = require('socket.io')(http, {
    cors: {
      origins: ["http://localhost:3000","http://http://136.56.172.0/"],
      methods: ["GET", "POST"]
    }
  });
// app.use('/static', express.static(__dirname + '/static'));

app.get('/', function(req, res){
    // res.sendFile(__dirname+"/../index.html");
});

http.listen(process.env.PORT || 5000, function(){
    console.log('listening on *:5000');
});


io.on('connection', function(socket) {
    console.log("Client connected");
    socket.emit('welcome', "Welcome, I'm glad you are here");
});