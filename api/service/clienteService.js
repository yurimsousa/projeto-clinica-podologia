const Cliente = require("../../moldels/cliente");
const Database = require("../../database/conectDb");

class ClienteService{

    async consultaCliente() {

        const db =  new Database();
        try {
            const user = await Cliente.findAll();
            return user;
        } catch (error) {
            return error;
        }

    }

    async inserirCliente(body) {
        
        const db = new Database();

        try {
            for (let contador = 0; contador < body.length; contador++) {
                let nome = body[contador].nome;
                let cpf = body[contador].cpf;
                let telefone = body[contador].telefone;

                await Cliente.create(
                    {
                        nome: nome,
                        cpf:cpf,
                        telefone: telefone
                    },
                );
            }
            return { message: "usuario incluido com sucesso!" }
        } catch (error) {
             return error;
        }

    }
   
    async editarCliente(body, id) {
        const db = new Database();
     
        try {
            const { nome , cpf , telefone } = body;
            const set = {
                nome:nome,
                cpf:cpf,
                telefone:telefone
            };
            
            const user = await Cliente.update( set , { where: { idCliente: id } });
           
            if (user) {
                return {
                    message: "funcionario alterado com sucesso!"
                }
            }
            return user;
        } catch (error) {
            return error;
        }

    }

    async deletarCliente(body, id) {
        const db = new Database();
        try {
            const {nome, cpf, telefone} = body;

            const user = await Cliente.findAll({ where: { idCliente: id } });
            if (user.length === 0) {
                return {
                    message: "usuario nao encontrado"
                }
            } else {
                await Cliente.destroy({ where: { idCliente: id } });
                return { message: "usuario excluido com sucesso!" }
            }

        } catch (error) {
            return error;
        }

    }
    
    
}
module.exports = ClienteService;