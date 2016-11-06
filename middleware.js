//Uses request and response. RequireAuthentication runs first. Next then tells the call to move on. 
var middleware = { 
	requireAuthentication: function (req, res, next) { 
			console.log('private route hit!');
			next();

	},
	logger: function (req, res, next) {
			console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
			next();
	}
};


module.exports = middleware;