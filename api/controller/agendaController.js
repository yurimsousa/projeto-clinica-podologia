const AgendaService = require("../service/agendaService");
const agendaService = new AgendaService();

class AgendaController {

    async consultaAgenda() {
        return await agendaService.consultaAgenda();
     }

   async inserirAgenda(body) {
      return await agendaService.inserirAgenda(body);
   }
   async editarCliente(body,id) {
      return await clienteService.editarCliente(body,id);
   }

   async deletarCliente(body,id) {
      return await clienteService.deletarCliente(body,id);
   }
   
}
module.exports = AgendaController;