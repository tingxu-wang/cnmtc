/*
* 若请求cookie中有access_token，将其拼接在url后方
*
* */

var path = require('path'),
  cookieParser = require('cookie');

var app = require('../server');

module.exports = function(options) {
  return function checkLogin(req, res, next) {
    if(req.path !== '/api/ousers/login'){
      var cookie = cookieParser.parse(req.headers.cookie);

      if(cookie['access_token']){
        req.query.access_token = cookie['access_token']
      }
    }
    next();
  }
};
