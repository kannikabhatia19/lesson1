var http = require('http'); 

//create our server to listen for incoming requests
http.createServer(function(request,response){
	//send the information back to the user
	response.writeHead(200, {'Content-Type': 'text-plain'});
	// saying hi to the user
	response.end('Hello World\n');
}).listen(1337, '127.0.0.1');

// console output to let user know we're listening for incoming requests
console.log("Server running at http://127.0.0.1:1337");