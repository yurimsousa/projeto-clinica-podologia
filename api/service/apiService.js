const Funcionario = require("../../moldels/funcionario");
const Database = require("../../database/conectDb");

class ApiService {

    async consultaFuncionario() {
        console.log("chegou aqui1");

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
            const { nome, telefone  } = body;

            const user = await Funcionario.create({ nome, telefone });
            return user;
        } catch (error) {
            throw new Error(error);
        }

    }
   
}
module.exports = ApiService;