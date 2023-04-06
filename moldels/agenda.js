const { Sequelize, Model } = require('sequelize');

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
                    type: Sequelize.DATE,
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
                idEspecialidade: {
                    type: Sequelize.STRING(50),
                    field: 'id_especialidade',
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
}
module.exports = Agenda