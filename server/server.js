'use strict';
var path = require('path');
var loopback = require('loopback');
var boot = require('loopback-boot');
var artTemplate = require('art-template');

var app = module.exports = loopback();

// Passport configurators..


// attempt to build the providers/passport config
var passportConfig = {};
try {
	passportConfig = require('../server/providers.json');
} catch (err) {
	console.trace(err);
	process.exit(1); // fatal
}

// configure view handler
artTemplate.config('openTag', '{%');
artTemplate.config('closeTag', '%}');
artTemplate.config('extname', '.html');

app.engine('.html', artTemplate.__express);
app.set('view engine', 'html');
app.set('views', path.resolve(__dirname, '../client/app'));
var clientPath = path.resolve(__dirname, '../client');

var instant = require('instant');
app.use(instant(clientPath));


// boot scripts mount components like REST API
boot(app, __dirname);

// The access token is only available after boot
app.use(loopback.token({
  model: app.models.accessToken
}));

app.use(loopback.cookieParser(app.get('cookieSecret')));
app.use(loopback.session({
	secret: 'kitty',
	saveUninitialized: true,
	resave: true
}));

app.all('/*', function(req, res) {
	if (req.path.indexOf('.') < 0) {
		  console.log(req.path);
  		res.sendFile('app/index.html',{ root: clientPath });
 	}
 	else {
	  res.sendStatus(404);
 	}
});

// Requests that get this far won't be handled
// by any middleware. Convert them into a 404 error
// that will be handled later down the chain.
app.use(loopback.urlNotFound());

// The ultimate error handler.
app.use(loopback.errorHandler());

app.start = function(port) {
  // start the web server
  return app.listen(port,function() {
    app.emit('started');
    console.log('Web server listening at: %s', app.get('url'));
  });
};
