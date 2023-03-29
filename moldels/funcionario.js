const { Sequelize, Model } = require('sequelize');

class Funcionario extends Model {
    static init(sequelize) {
        super.init(
            {
                idFuncionario: {
                    type: Sequelize.BIGINT,
                    autoIncrement: true,
                    primaryKey: true,
                    field: 'id_funcionario'
                    
                },
                nome: {
                    type: Sequelize.STRING(50),
                    field: 'nome_funcionario',
                    allowNull: false
                },
                telefone: {
                    type: Sequelize.STRING(50),
                    field: 'telefone_funcionario',
                    allowNull: false
                }
            },
            {
                sequelize,
                modelName: 'funcionario_tb',
                timestamps: false

            }
        );
        return this;
    }
}
module.exports = Funcionario