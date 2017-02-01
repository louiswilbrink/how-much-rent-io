var express       = require('express');
var app           = express();
var config        = require('./config/configuration').getConfig();
var routes        = require('./server/routes/base');

app.use(express.static(config.rootDir + '/web'));
//app.use(cookieParser());
//app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
//app.use(bodyParser.json())

app.listen(config.port);
console.log('Listening on ' + config.port);
