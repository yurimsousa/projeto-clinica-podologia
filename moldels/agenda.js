const { Sequelize, Model } = require('sequelize');
const ServicoTB = require("../moldels/servico");

class Agenda extends Model {
    static init(sequelize) {
        super.init(
            {
                idAgenda: {
                    type: Sequelize.BIGINT,
                    autoIncrement: true,
                    primaryKey: true,
                    field: 'id_agenda_prontuario'

                },
                idFuncionario: {
                    type: Sequelize.STRING(50),
                    field: 'id_funcionario',
                    allowNull: true
                },
                dataInclusao: {
                    type: Sequelize.DATE,
                    field: 'data_inclusao',
                    allowNull: true
                },
                dataAgenda: {
                    type: Sequelize.DATEONLY,
                    field: 'data_agenda',
                    allowNull: true
                },
                idSituacaoAgenda: {
                    type: Sequelize.STRING(50),
                    field: 'id_situacao_agenda',
                    allowNull: true
                },
                idCliente: {
                    type: Sequelize.STRING(50),
                    field: 'id_cliente',
                    allowNull: true
                },
                idServico: {
                    type: Sequelize.STRING(50),
                    field: 'id_servico',
                    allowNull: true
                }
            },
            {
                sequelize,
                modelName: 'agenda_prontuario',
                timestamps: false

            }
        );
        return this;
    }


    static associate(models) {
        this.belongsTo(models.servico_tb, {
            foreignKey: 'ID_SERVICO',
            as: 'servico',
        });
    }
}
module.exports = Agenda