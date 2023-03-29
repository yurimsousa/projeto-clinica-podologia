const { Sequelize, Model } = require('sequelize');

class Cliente extends Model {
    static init(sequelize) {
        super.init(
            {
                idCliente: {
                    type: Sequelize.BIGINT,
                    autoIncrement: true,
                    primaryKey: true,
                    field: 'id_cliente'
                    
                },
                nome: {
                    type: Sequelize.STRING(50),
                    field: 'nome_cliente',
                    allowNull: false
                },
                cpf: {
                    type: Sequelize.STRING(50),
                    field: 'cpf_cliente',
                    allowNull: false
                },
                telefone: {
                    type: Sequelize.STRING(50),
                    field: 'telefone_cliente',
                    allowNull: false
                }
            },
            {
                sequelize,
                modelName: 'cliente_tb',
                timestamps: false

            }
        );
        return this;
    }
}
module.exports = Cliente