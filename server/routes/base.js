var express       = require('express');
var morgan        = require('morgan');
var router        = express.Router();

var config        = require('../../config/configuration').getConfig();

router.use(morgan('dev'));

router.get('/', function (req, res) {
  res.sendFile('start.html', { 
    root: config.rootDir + '/web/'
  });
});

module.exports = router;
