'use strict';
module.exports = (sequelize, DataTypes) => {
  const Profissao = sequelize.define('Profissao', {
    nome: DataTypes.STRING
  }, {});
  Profissao.associate = function(models) {
    // associations can be defined here
  };
  return Profissao;
};