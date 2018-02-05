var dsConfig = require('../datasources.json');
var path = require('path');

module.exports = function(app) {
  // var User = app.models.User;
  //
  // //log a user in
  // app.post('/login', function(req, res) {
  //   User.login({
  //     name: req.body.name,
  //     password: req.body.password
  //   }, 'user', function(err, token) {
  //     if (err) {
  //       if(err.details && err.code === 'LOGIN_FAILED_EMAIL_NOT_VERIFIED'){
  //         res.render('reponseToTriggerEmail', {
  //           title: 'Login failed',
  //           content: err,
  //           redirectToEmail: '/api/users/'+ err.details.userId + '/verify',
  //           redirectTo: '/',
  //           redirectToLinkText: 'Click here',
  //           userId: err.details.userId
  //         });
  //       } else {
  //         res.render('response', {
  //           title: 'Login failed. Wrong username or password',
  //           content: err,
  //           redirectTo: '/',
  //           redirectToLinkText: 'Please login again',
  //         });
  //       }
  //       return;
  //     }
  //     res.render('home', {
  //       email: req.body.email,
  //       accessToken: token.id,
  //       redirectUrl: '/api/users/change-password?access_token=' + token.id
  //     });
  //   });
  // });
};
