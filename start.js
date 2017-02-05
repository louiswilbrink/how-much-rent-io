var express       = require('express');
var app           = express();
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var config        = require('./config/configuration').getConfig();

var base          = require('./server/routes/base');
var sitemap       = require('./server/sitemap');

/*********************************************************
 * Express Configuration
 *********************************************************/
app.use(express.static(config.rootDir + '/web'));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))

 //parse application/json
app.use(bodyParser.json())

// Load routes.
app.use(base);
app.use(sitemap);

app.listen(config.port);
console.log('Listening on ' + config.port);
