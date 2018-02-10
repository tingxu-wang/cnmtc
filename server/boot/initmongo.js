module.exports = function(app) {
  var mongoDs = app.dataSources.mongo;

  if(!mongoDs.models.Ouser){
    mongoDs.automigrate('AccessToken', function(err){
      if(err) throw err;
    });
    mongoDs.automigrate('Ouser', function(err){
      if(err) throw err;

      var Ouser = app.models.Ouser;
      var Role = app.models.Role;
      var RoleMapping = app.models.RoleMapping;

      Ouser.create([
        {username: 'admin', email: 'admin@e.com', password: '827ccb0eea8a706c4c34a16891f84e7b'},
        {username: 'user', email: 'user@e.com', password: '827ccb0eea8a706c4c34a16891f84e7b'},
      ], function(err, users) {
        if (err) throw err;
        mongoDs.automigrate('Role', function(err){
          if(err) throw err;
          mongoDs.automigrate('RoleMapping', function(err){
            if(err) throw err;
            Role.create({
              name: 'admin'
            }, function(err, role) {
              console.log('Created role:', role);

              role.principals.create({
                principalType: RoleMapping.USER
                , principalId: users[0].id
              }, function(err, principal) {
                if (err) throw err;
                console.log('Created principal:', principal);
              });
            });

            Role.create({
              name: 'user',
            }, function(err, role) {
              console.log('Created role:', role);

              role.principals.create({
                principalType: RoleMapping.USER
                , principalId: users[1].id
              }, function(err, principal) {
                if (err) throw err;
                console.log('Created principal:', principal);
              });
            });

          });
        });
      });
    });
  }
};
