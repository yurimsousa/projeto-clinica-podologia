/* eslint-disable space-before-blocks */
const Agenda = require("../../moldels/agenda");
const Servico = require("../../moldels/servico");
const Database = require("../../database/conectDb");
const { Op } = require("../../config/DB");
const Funcionario = require("../../moldels/funcionario");
const Cliente = require("../../moldels/cliente");

class AgendaService {
  async consultaAgenda() {
    const db = new Database();
    try {
      const user = await Agenda.findAll();
      return user;
    } catch (error) {
      return error;
    }
  }

  async inserirAgenda(body) {
    const db = new Database();

    try {
      let idFuncionario = body.idFuncionario;
      let dataInclusao = body.dataInclusao;
      let dataAgenda = body.dataAgenda;
      let idSituacaoAgenda = body.idSituacaoAgenda;
      let idCliente = body.idCliente;
      let idEspecialidade = body.idEspecialidade;

      await Agenda.create({
        idFuncionario,
        dataInclusao,
        dataAgenda,
        idSituacaoAgenda,
        idCliente,
        idEspecialidade,
      });

      return { message: "concluido com sucesso!" };
    } catch (error) {
      return error;
    }
  }

  async editarServico(body, id) {
    const db = new Database();

    try {
      const { nome, valor } = body;
      const set = {
        nome: nome,
        valor: valor,
      };

      const user = await Servico.update(set, { where: { idServico: id } });

      if (user) {
        return {
          message: "serviço alterado com sucesso!",
        };
      }
      return user;
    } catch (error) {
      return error;
    }
  }

  async deletarServico(body, id) {
    const db = new Database();
    try {
      const { nome, valor } = body;

      const user = await Cliente.findAll({ where: { idServico: id } });
      if (user.length === 0) {
        return {
          message: "serviço nao encontrado",
        };
      } else {
        await Servico.destroy({ where: { idServico: id } });
        return { message: "serviço excluido com sucesso!" };
      }
    } catch (error) {
      return error;
    }
  }

  async consultaAgendaParemetro() {
    const db = new Database();

    try {
      const user = await Agenda.findAll();
      return user;
    } catch (error) {
      return error;
    }
  }

  async consultaProntuarioParams(params) {
    const db = new Database();
    let valorTotal = 0;
    let arrProtuarioAgrupado = [];
    let arrProntuarioAgrupadoFormatado = [];

    try {
      let where = {};

      if (params.idFuncionario) {
        Object.assign(where, {
          idFuncionario: { [Op.eq]: params.idFuncionario },
        });
      }

      if (params.dataAgenda) {
        Object.assign(where, {
          dataAgenda: { [Op.between]: params.dataAgenda },
        });
      }
      if (params.idSituacaoAgenda) {
        Object.assign(where, {
          idSituacaoAgenda: { [Op.eq]: params.idSituacaoAgenda },
        });
      }

      const prontuario = await Agenda.findAll({
        include: [
          {
            model: Servico,
            as: "servico",
          },
          {
            model: Funcionario,
            as: "funcionario",
          },
          {
            model: Cliente,
            as: "cliente",
          },
        ],
        where,
        nest: true,
        raw: true,
      });

      if (prontuario.length > 0) {
        let elementoEncotrado = false;
        let posicao;
        
        prontuario.forEach(agenda => {
            valorTotal += Number(agenda.servico.valor);
            agenda.valorTotalFuncionario = Number(agenda.servico.valor);
        });

        prontuario.filter((agenda) => {
          for (posicao = 0; posicao < arrProtuarioAgrupado.length; posicao +=1) {
            if (
              arrProtuarioAgrupado[posicao].idFuncionario === agenda.idFuncionario
            ) {
              elementoEncotrado = true;
              break;
            }
          }

          if (elementoEncotrado) {
            arrProtuarioAgrupado[posicao].valorTotalFuncionario += Number(agenda.servico.valor);
          } else {
            arrProtuarioAgrupado.push(agenda);
          }
        });

        arrProtuarioAgrupado.forEach(prontuario => {
            arrProntuarioAgrupadoFormatado.push({
                nomeFuncionario:prontuario.funcionario.nome,
                valorTotalFuncionario:prontuario.valorTotalFuncionario,
                percentualFuncionario:parseFloat((prontuario.valorTotalFuncionario*0.3)).toFixed(2),
            })
            
        });

        return {
          valorTotal,
          Funcionarios:arrProntuarioAgrupadoFormatado,
        };
      }

      return prontuario;
    } catch (error) {
      return error;
    }
  }
}
module.exports = AgendaService;
