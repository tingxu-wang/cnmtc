'use strict';

module.exports = function(User) {
  User.login = function(name, password, cb){
    User.findOne({
      where:{
        name,
        password
      }
    },function(err,data){
      let res = {};
      if(data){
        res.code = 1;
        res.data = data;
      }else{
        res.code = 0;
        res.data = {};
        res.msg = '账号或密码错误';
      }
      cb(err,res);
    });
  };

  User.remoteMethod(
    'login',{
      http: {
        verb: 'get'
      },
      accepts:[
        {
          arg:'name',
          type:'string',
        },
        {
          arg:'password',
          type:'string',
        }
      ],
      returns: {
        arg: 'data',
        type: 'string',
      }
    }
  )
};
