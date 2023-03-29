const { Sequelize, Model } = require('sequelize');

class Servico extends Model {
    static init(sequelize) {
        super.init(
            {
                idServico: {
                    type: Sequelize.BIGINT,
                    autoIncrement: true,
                    primaryKey: true,
                    field: 'id_servico'
                    
                },
                nome: {
                    type: Sequelize.STRING(50),
                    field: 'nome_servico',
                    allowNull: false
                },
                valor: {
                    type: Sequelize.STRING(50),
                    field: 'valor_servico',
                    allowNull: false
                }
            },
            {
                sequelize,
                modelName: 'servico_tb',
                timestamps: false

            }
        );
        return this;
    }
}
module.exports = Servico