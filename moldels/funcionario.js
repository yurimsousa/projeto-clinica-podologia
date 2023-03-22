const { Sequelize, Model } = require('sequelize');

class Funcionario extends Model {
    static init(sequelize) {
        super.init(
            {
                id_funcionario: {
                    type: Sequelize.BIGINT,
                    autoIncrement: true,
                    primaryKey: true,
                    field: 'ID_FUNCIONARIO'
                    
                },
                nome_funcionario: {
                    type: Sequelize.STRING(255),
                    field: 'NOME',
                    allowNull: false
                },
                telefone_funcionario: {
                    type: Sequelize.STRING(255),
                    field: 'TELEFONE',
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