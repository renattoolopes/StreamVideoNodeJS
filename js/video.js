var http = require("http");
var fs = require("fs");

console.log("Server Starting...");
http.createServer(
	function (request,response){
		response.writeHead(200, {'Content-Type': 'video/mp4'});
		var rs = fs.createReadStream("file.mp4");
		rs.pipe(response);



	}).listen(3000);

