//code goes here
var express = require('express');
var app = express();
var http = require('http').createServer(app);
var path = require('path');
cors = require('cors');
const Pool = require('pg').Pool;
require('dotenv').config();
console.log(process.env.POSTGRES_USER,process.env.POSTGRES_HOST,process.env.POSTGRES_DB,process.env.POSTGRES_PASS,process.env.POSTGRES_PORT);
const pool = new Pool({
    user: process.env.POSTGRES_USER,
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    password: process.env.POSTGRES_PASS,
    port: process.env.POSTGRES_PORT,
});


app.use(cors());

app.get('/', function(req, res){
    res.send('hello world');
});


app.listen(process.env.PORT || 5000, function(){
    console.log('listening on *:5000');
});

const testReq = () => {
    return new Promise(function(resolve, reject){
        pool.query('SELECT * FROM workerinfo', (error, results) => {
            if(error){
                reject(error);
            }
            if(results){
                resolve(results.rows);
            }
            else{
                console.log(error,results);
            }
        });
    });
}


app.get('/test', (req, res) =>{
    testReq()
        .then(response => {
            res.status(200).send(response);
        }).catch(error => res.status(500).send(error))
})

