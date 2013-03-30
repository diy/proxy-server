// Dependencies 
var http 	= require('http');
    request = require('request');

// Talk to another server
function proxyHandler(req, res) {
	var reqOptions = {
		url: 'https://brain.diy.org/makers/goldenrod/stream',
		headers: {"x-diy-api-key" : "DIY_MAKER_KEY"}
	}
	req.pipe(request(reqOptions)).pipe(res);
}

// Create a server, use a proxy
http.createServer(proxyHandler).listen(8080);
console.log('Listening on port 8080');