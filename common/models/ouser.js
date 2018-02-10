'use strict';

const promisify = require('promisify-node');

const app = require('../../server/server');

module.exports = function(Ouser) {
  promisify(Ouser.findOne);
  promisify(Ouser.login);

  Ouser.userLogin = function(email = '', password = '', cb) {
    let res = {};

    Ouser.login({email, password}).then(function(tokenData){
      res.code = 1;
      res.data = {
        accessToken: tokenData.id,
      };
      cb(null,res);
    }).catch(function(err){
      res.code = 0;
      res.data = {};
      res.msg = '登录失败';
      cb(err,res);
    });
  };

  /*
  * 根据用户token获取其对应的角色名称
  * */
  Ouser.getPrincipalByToken = function(accessToken = '', cb) {
    // Ouser.findOne({email, password})
  };

  Ouser.remoteMethod(
    'userLogin',{
      http: {
        verb: 'post'
      },
      accepts: [
        {
          arg: 'email',
          type: 'string',
        },
        {
          arg: 'password',
          type: 'string',
        },
      ],
      returns: {
        arg: 'data',
        type: 'string',
      }
    }
  );

  Ouser.afterRemote('userLogin', function (context, result, next) {
    const data = result.data,
      res = context.res;

    if(data.code === 1){
      res.cookie('access_token', data.data.accessToken, { maxAge: 1000*60*60*2, httpOnly: true}); // 两小时过期
    }
    return next();
  });
};
