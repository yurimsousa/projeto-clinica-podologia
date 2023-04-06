const Sequelize = require('sequelize');

require('dotenv').config();

const get = () => {
    const dbName = 'clinica_podologia_db';
    const dbUser = 'root';
    const dbPassword = "";
    const dbHost = '127.0.0.1';
    const dbPort = 3306;
    const dbDialect = 'mysql';
    return {
      dialect: dbDialect,
      host: dbHost,
      username: dbUser,
      password: dbPassword,
      database: dbName,
      port: dbPort,
      logging: console.log,
      define: {
        underscored: false,
        underscoredAll: false,
        freezeTableName: true,
        timestamps: true,
      },
    };
  };
   
  module.exports = {
    get,
    Op: Sequelize.Op,
    Sequelize,
  };