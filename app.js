/*
//http example 
var http = require('http');

var server = http.createServer (function (req, res){
	res.writeHead(200,{"Content-Type":"text/plain"});
	res.end("Hello World from server\n");
	
});

server.listen(); 

*/

/*
var net = require('net');

var server = net.createServer(function (socket){
	
	console.log('connection from' + socket.remoteAddress);
	net.end('Hello Word\n');
	
});

server.listen(7000,'127.0.0.1'); */

var express = require('express');

var app = express();

app.get('/',function (req, res){
	res.json({message:'hurray from mohan express'});
	
});

app.listen(7000);
