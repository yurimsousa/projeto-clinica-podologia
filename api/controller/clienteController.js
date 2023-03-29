const ClienteService = require("../service/clienteService");
const clienteService = new ClienteService();

class ClienteController {

   async consultaCliente() {
      return await clienteService.consultaCliente();
   }

   async inserirCliente(body) {
      return await clienteService.inserirCliente(body);
   }
   async editarCliente(body,id) {
      return await clienteService.editarCliente(body,id);
   }

   async deletarCliente(body,id) {
      return await clienteService.deletarCliente(body,id);
   }
   
}
module.exports = ClienteController;