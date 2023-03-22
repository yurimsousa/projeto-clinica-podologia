const ApiService = require("./../service/apiService");
const apiService = new ApiService();

class ApiController {

     async consultaFuncionario() {
      const apiService = new ApiService();
      return await apiService.consultaFuncionario();
   }

   async inserirFuncionario(body) {
      const apiService = new ApiService();
      return await apiService.inserirFuncionario(body);
   }
   
}
module.exports = ApiController;