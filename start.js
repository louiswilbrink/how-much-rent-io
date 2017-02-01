var express       = require('express');
var app           = express();
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var config        = require('./config/configuration').getConfig();

var routes        = require('./server/routes/base');

/*********************************************************
 * Express Configuration
 *********************************************************/
app.use(express.static(config.rootDir + '/web'));

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }))

 //parse application/json
app.use(bodyParser.json())

app.use(routes);

app.listen(config.port);
console.log('Listening on ' + config.port);
