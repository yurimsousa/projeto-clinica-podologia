const ServicoService = require("../service/servicoService");
const servicoService = new ServicoService();

class ServicoController {

   async consultaServico() {
      return await servicoService.consultaServico();
   }

   async inserirServico(body) {
      return await servicoService.inserirSer,vico(body);
   }
   async editarServico(body,id) {
      return await servicoService.editarServico(body,id);
   }

   async deletarServico(body,id) {
      return await servicoService.deletarServico(body,id);
   }
}
module.exports = ServicoController;