var express       = require('express');
var path          = require('path');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var config        = require('./config/configuration').getConfig();

var base          = require('./server/routes/base');
var sitemap       = require('./server/sitemap');
var robots        = require('./server/robots');

var app           = express();

/*********************************************************
 * Express Configuration
 *********************************************************/
// Make all application files public.
app.use(express.static(config.rootDir + '/web'));

// Requests for library resources will hit a /lib path that maps to the node_modules directory.
app.use('/lib', express.static(path.join(config.rootDir + '/node_modules')));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))

 //parse application/json
app.use(bodyParser.json())

/*********************************************************
 * Load Routes
 *********************************************************/
app.use(base);
app.use(sitemap);
app.use(robots);

/*********************************************************
 * Listen
 *********************************************************/
app.listen(config.port);
console.log('Listening on ' + config.port);
