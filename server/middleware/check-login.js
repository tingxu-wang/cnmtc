module.exports = function(options) {
  return function checkLogin(req, res, next) {
    if(req.path !== '/api/ousers/login'){

    }
    next();
  }
};
