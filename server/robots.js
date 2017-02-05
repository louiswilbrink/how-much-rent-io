var robots  = require('express-robots');

module.exports = robots({UserAgent: '*', Disallow: ''});
