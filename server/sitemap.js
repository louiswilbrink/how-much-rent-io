var express = require('express');
var sm      = require('sitemap');

var router  = express.Router();
var config  = require('../config/configuration').getConfig();

var sitemap = sm.createSitemap({
  hostname: config.hostName,
  cacheTime: 600000,
  urls: [
    { url: '/', changefreq: 'daily', priority: 1.0 }
  ]
});

router.get('/sitemap.xml', function(req, res) {
  sitemap.toXML(function (error, xml) {
    if (error) {
      return res.status(500).end();
    }

    res.header('Content-Type', 'application/xml');
    res.send(xml);
  });
});

module.exports = router;
