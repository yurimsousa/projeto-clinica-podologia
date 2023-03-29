const FuncionarioService = require("../service/funcionarioService");
const funcionarioService = new FuncionarioService();

class FuncionarioController {

   async consultaFuncionario() {
      return await funcionarioService.consultaFuncionario();
   }

   async inserirFuncionario(body) {
      return await funcionarioService.inserirFuncionario(body);
   }
   async editarFuncionario(body,id) {
      return await funcionarioService.editarFuncionario(body,id);
   }

   async deletarFuncionario(body,id) {
      return await funcionarioService.deletarFuncionario(body,id);
   }
}
module.exports = FuncionarioController;