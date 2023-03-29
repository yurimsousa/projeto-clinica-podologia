const Funcionario = require("../../moldels/funcionario");
const Database = require("../../database/conectDb");
const Servico = require("../../moldels/servico");

class FuncionarioService{

    async consultaFuncionario() {

        const db =  new Database();
        try {
            const user = await Funcionario.findAll();
            return user;
        } catch (error) {
            return error;
        }

    }

    async inserirFuncionario(body) {
        
        const db = new Database();

        try {
            for (let contador = 0; contador < body.length; contador++) {
                let nome = body[contador].nome;
                let telefone = body[contador].telefone;

                await Funcionario.create(
                    {
                        nome: nome,
                        telefone: telefone,
                    },
                );
            }
            return { message: "usuario incluido com sucesso!" }
        } catch (error) {
             return error;
        }

    }
   
    async editarFuncionario(body, id) {
        const db = new Database();
     
        try {
            const { nome , telefone } = body;
            const set = {
                nome:nome,
                telefone:telefone
            };
            
            const user = await Funcionario.update( set , { where: { idFuncionario: id } });
           
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

    async deletarFuncionario(body, id) {
        const db = new Database();
        try {
            const {nome, telefone} = body;

            const user = await Servico.findAll({ where: { idFuncionario: id } });
            if (user.length === 0) {
                return {
                    message: "usuario nao encontrado"
                }
            } else {
                await Funcionario.destroy({ where: { idFuncionario: id } });
                return { message: "usuario excluido com sucesso!" }
            }

        } catch (error) {
            throw new Error(error);
        }

    }
    
    
}
module.exports = FuncionarioService;