'use strict';

module.exports = function(Person) {
  Person.getList = function(name = '', location = 0, career = 0, evaluate = 0, cb) {
    let filters = {};

    name !== '' ? filters.name = name : '';
    location !== 0 ? filters.location = location : '';
    career !== 0 ? filters.career = career : '';
    evaluate !== 0 ? filters.evaluate = evaluate : '';

    Person.find({
      where: filters
    },function(err,data){
      let res = {};
      if(data){
        res.code = 1;
        res.data = data;
      }else{
        res.code = 0;
        res.data = [];
        res.msg = '未找到律师信息';
      }
      cb(err,res);
    });
  };

  Person.remoteMethod(
    'getList',{
      http: {
        verb: 'get'
      },
      accepts:[
        {
          arg: 'name',
          type: 'string',
        },
        {
          arg: 'location',
          type: 'number',
        },
        {
          arg: 'career',
          type: 'number',
        },
        {
          arg: 'evaluate',
          type: 'number',
        },
      ],
      returns: {
        arg: 'data',
        type: 'string',
      }
    }
  )
};
