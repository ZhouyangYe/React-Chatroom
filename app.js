var express = require('express');
var path = require('path');
var app = express();
var http = require('http').Server(app);
var socket_io = require('socket.io');
var bodyParser = require('body-parser');

var io = socket_io();
io.attach(http);

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'/index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/js',express.static(path.join(__dirname,'/js')));
app.use('/css',express.static(path.join(__dirname,'/css')));
app.use('/node_modules',express.static(path.join(__dirname,'/node_modules')));

io.on('connection',function(socket){
    console.log('A user connected! User: '+socket.id);

    socket.on('action',function(action){
        if(action.type === 'server/update'){
            console.log("received!");
            socket.broadcast.emit('action', {type:'BROADCAST', data:action.data});
        }
    });

    socket.on('disconnect',function(){
        console.log('A user disconnected! User: '+socket.id);
    });
});

http.listen(8888,function(){
    console.log('Listening on port 8888');
});