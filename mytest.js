var express = require('./index');
var app = express();

app.listen(3000);

//app.use(function(req, res, next) {
//	console.log('exe mid-ware log', req.url);
//	next();
//});

app.all('/abc',function(req, res, next) {
	console.log('exe mid-ware log2', req.url);
	next();
});

// app.use('/a/bc',require('./myRouter'));

//app.use('/x/yz', function(req, res, next) {
//	console.log('exe mid-ware /x/yz', req.url);
//	next();
//	res.end('hello, ok' + req.url);
//});

//app.use('/', function(req, res, next) {
//	console.log('exe mid-ware /', req.url);
//	res.end('hello, ok' + req.url);
//	//next();
//});