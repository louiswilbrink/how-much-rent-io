var express       = require('express');
var router        = express.Router();
var config        = require('../../config/configuration').getConfig();

router.all('/', function (req, res) {
  res.sendFile('index.html', { 
      root: config.rootDir + '/web/'
  });
});

module.exports = router;
