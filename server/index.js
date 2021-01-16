//code goes here
var express = require('express');
var app = express();
var http = require('http').createServer(app);
var path = require('path');
cors = require('cors');
const Pool = require('pg').Pool;
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASS,
    port: process.env.POSTGRES_PORT,
});

const io = require('socket.io')(http, {
    cors: {
      origins: ["http://localhost:3000","http://136.56.172.0/", "http://leoascenzi.com", "http://www.leoascenzi.com"],
      methods: ["GET", "POST"]
    }
  });

app.use(cors());
app.get('/', function(req, res){
    res.send('hello world');
});

http.listen(process.env.PORT || 5000, function(){
    console.log('listening on *:5000');
});


io.on('connection', (socket) => {
    console.log("Client connected");
    socket.emit('welcome', "Welcome, I'm glad you are here");
});