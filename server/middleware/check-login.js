var cookieParser = require('cookie');

var app = require('../server');

var AccessToken = app.models.AccessToken;

module.exports = function(options) {
  return function checkLogin(req, res, next) {
    var cookie = cookieParser.parse(req.headers.cookie);
    if(req.path !== '/api/ousers/login'){

    }
    next();
  }
};
