var express = require('express'); // Requeire express module
var app = express(); // Init express module
var fs = require("fs"); //File System import


app.get('/spider',function(request,response){
		response.writeHead(200, {'Content-Type': 'video/mp4'});
		var rs = fs.createReadStream("files/spider.mp4");
		rs.pipe(response);
})

app.get('/free',function(request,response){
		response.writeHead(200, {'Content-Type': 'video/mp4'});
		var rs = fs.createReadStream("files/free.mp4");
		rs.pipe(response);
})

app.get('/money',function(request,response){
		response.writeHead(200, {'Content-Type': 'video/mp4'});
		var rs = fs.createReadStream("files/money.mp4");
		rs.pipe(response);
})

var server = app.listen(8001,function(){
	var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})