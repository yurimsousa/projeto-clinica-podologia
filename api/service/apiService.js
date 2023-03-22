const Database = require("../../database/conectDb");
const Funcionario = require("../../moldels/funcionario");

class ApiService {

    async consultaFuncionario() {
        const db = new Database();
        try {
            console.log("chegou aqui");
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