const Agenda = require("../../moldels/agenda");
const Database = require("../../database/conectDb");

class AgendaService{

    async consultaAgenda() {

        const db =  new Database();
        try {
            const user = await Agenda.findAll();
            return user;
        } catch (error) {
            return error;
        }

    }


    async inserirAgenda(body) {
        
        const db = new Database();

        try {
               
                let idFuncionario = body.idFuncionario;
                let dataInclusao = body.dataInclusao;
                let dataAgenda = body.dataAgenda;
                let idSituacaoAgenda = body.idSituacaoAgenda;
                let idCliente = body.idCliente;
                let idEspecialidade = body.idEspecialidade;
            
                await Agenda.create(
                    {
                        idFuncionario,
                        dataInclusao,
                        dataAgenda,
                        idSituacaoAgenda,
                        idCliente,
                        idEspecialidade

                    },
                );
            
            return { message: "concluido com sucesso!" }
        } catch (error) {
             return error;
        }

    }
   
    async editarServico(body, id) {
        const db = new Database();
     
        try {
            const { nome , valor } = body;
            const set = {
                nome:nome,
                valor:valor,
            };
            
            const user = await Servico.update( set , { where: { idServico: id } });
           
            if (user) {
                return {
                    message: "serviço alterado com sucesso!"
                }
            }
            return user;
        } catch (error) {
            return error;
        }

    }

    async deletarServico(body, id) {
        const db = new Database();
        try {
            const {nome, valor} = body;

            const user = await Cliente.findAll({ where: { idServico: id } });
            if (user.length === 0) {
                return {
                    message: "serviço nao encontrado"
                }
            } else {
                await Servico.destroy({ where: { idServico: id } });
                return { message: "serviço excluido com sucesso!" }
            }

        } catch (error) {
            return error;
        }

    }
    
    async consultaAgendaParemetro() {
        const db = new Database();

        try {
            const user = await Agenda.findAll();
            return user;
        } catch (error) {
            return error;
        }

       

    }
    
}
module.exports = AgendaService;