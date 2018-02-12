const promisify = require('promisify-node');

module.exports = function(app) {
  const RoleMapping = app.models.RoleMapping;
  const Role = app.models.Role;
  const AccessToken = app.models.AccessToken;

  promisify(RoleMapping.findOne);
  promisify(Role.findOne);
  promisify(AccessToken.findOne);

  async function getPrincipalsByToken(access_token) {
    const {userId} = await AccessToken.findOne({
      where: {
        id: access_token,
      }
    });
    let res = {code: 0};

    if(userId){
      const {roleId} = await RoleMapping.findOne({
        where: {
          principalId: userId,
        }
      });

      if(roleId){
        const {name} = await Role.findOne({
          where: {
            id: roleId
          }
        });

        if(name){
          res.code = 1;
          res.data = {
            principalName: name,
            userId,
          };
        }
      }
    }

    if(res.code === 0){
      res.msg = '获取角色失败'
    }

    return res;
  }

  /*
  * 根据token获取用户角色名称
  *
  * */
  Role.getPrincipalsByToken = function(access_token = '', cb) {
    getPrincipalsByToken(access_token).then(function(res){
      cb(null, res);
    });
  };

  Role.remoteMethod(
    'getPrincipalsByToken', {
      accepts: {
        arg: 'access_token',
        type: 'string'
      },
      returns: {
        arg: 'data',
        type: 'object'
      }
    }
  );
};
