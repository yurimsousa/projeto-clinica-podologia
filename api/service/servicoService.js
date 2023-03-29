const Servico = require("../../moldels/servico");
const Database = require("../../database/conectDb");
const Funcionario = require("../../moldels/funcionario");

class ServicoService{

    async consultaServico() {

        const db =  new Database();
        try {
            const user = await Servico.findAll();
            return user;
        } catch (error) {
            return error;
        }

    }

    async inserirServico(body) {
        
        const db = new Database();

        try {
            for (let contador = 0; contador < body.length; contador++) {
                let nome = body[contador].nome;
                let valor = body[contador].valor;
            
                await Servico.create(
                    {
                        nome: nome,
                        valor:valor,
                    },
                );
            }
            return { message: "serviço incluido com sucesso!" }
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
    
    
}
module.exports = ServicoService;