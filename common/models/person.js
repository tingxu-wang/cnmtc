'use strict';

module.exports = function(Person) {
  Person.getList = function(name = '', location = 0, career = 0, evaluate = 0, cb) {
    let filters = {};

    name !== '' ? filters.name = decodeURIComponent(name) : '';
    if(name !== ''){
      filters.name = {
        regexp: new RegExp(name, 'i')
      }
    }
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

  Person.getById = function(id = '', cb){
    let res = {};
    const filters = {
      id,
    };

    if(id){
      Person.findOne({
        where: filters,
      },(err, data)=> {
        if(data){
          res.code = 1;
          res.data = data;
        }else{
          res.code = 0;
          res.data = {};
          res.msg = '未找到律师信息';
        }
        cb(err, res);
      });
    }else{
      res = {
        code : 0,
        msg : 'id为空',
        data: {},
      };
      cb('id is empty', res);
    }
  };

  Person.updatePerson = function(id = '', name, location, career, evaluate, cb) {
    Person.update({id},{name, location, career, evaluate},function(err, data){
      let res = {};
      if(data.count > 0){
        res.code = 1;
        res.msg = '修改成功'
      }else{
        res.code = 0;
        res.msg = '修改失败'
      }

      cb(err,res);
    })
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
        type: 'object',
      }
    }
  );

  Person.remoteMethod(
    'updatePerson',{
      http: {
        verb: 'put'
      },
      accepts:[
        {
          arg: 'id',
          type: 'string',
        },
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
        type: 'object',
      }
    }
  );

  Person.remoteMethod(
    'getById',{
      http: {
        verb: 'get'
      },
      accepts:[
        {
          arg: 'id',
          type: 'string',
        },
      ],
      returns: {
        arg: 'data',
        type: 'string',
      },
    }
  )
};
