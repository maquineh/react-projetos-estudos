'use strict';
var bcrypt = require('bcrypt-nodejs');
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING
  }, {});
  
  Usuario.beforeSave((usuario, options) => {
    if(usuario.changed('password')){
      usuario.password = bcrypt.hashSync(usuario.password, bcrypt.genSaltSync(10), null);
    }
  });

  Usuario.prototype.comparePassword = function (pwd, cb) {
    bcrypt.compare(pwd, this.password, function (erro, isMatch) {
      if (erro){
        return cb(erro);
      }
      cb(null,isMatch);
    })
  };

  Usuario.associate = function(models) {
    // associations can be defined here
  };
  return Usuario;
};