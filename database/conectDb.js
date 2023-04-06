const Sequelize = require('sequelize');
const databaseConfig = require('../config/DB');
const Funcionario = require('../moldels/funcionario');
const Cliente = require('../moldels/cliente');
const Servico = require('../moldels/servico');
const Agenda = require('../moldels/agenda');

const models = [Agenda, , Servico, Funcionario, Cliente];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig.get());
    models
      .map((model) => model.init(this.connection))
      .map((model) => model.associate &&
        model.associate(this.connection.models));
  }

  close() {
    return this.connection.close();
  }
}

module.exports = Database;
