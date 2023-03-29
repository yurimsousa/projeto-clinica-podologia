const FuncionarioController = require("../controller/funcionarioController");
const funcionarioController = new FuncionarioController();
const ClienteController = require("../controller/clienteController");
const clienteController = new ClienteController();
const ServicoController = require("../controller/servicoController");
const servicoController = new ServicoController();

const express = require("express");
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/consulta-funcionario", async function (request, response) {
    try {
        const result = await funcionarioController.consultaFuncionario();
        return response.json(result);
    } catch (error) {
        return error;
    }
});

app.post("/inserirFuncionario", async function (request, response) {
    try {
        const body = request.body;
        const result = await funcionarioController.inserirFuncionario(body);
        return response.json(result);
    } catch (error) {
        return error;
    }
});

app.put("/editarFuncionario/:id", async function (request, response) {

    const id = request.params.id;
    const body = request.body;
    const result = await funcionarioController.editarFuncionario(body, id);
    return response.json(result);
});

app.delete("/deletarFuncionario/:id", async function (request, response) {

    const id = request.params.id;
    const body = request.body;
    const result = await funcionarioController.deletarFuncionario(body, id);
    return response.json(result);
});

app.get("/consulta-cliente", async function (request, response) {
    try {
        const result = await clienteController.consultaCliente();
        return response.json(result);
    } catch (error) {
        return error;
    }
});

app.post("/inserirCliente", async function (request, response) {
    try {
        const body = request.body;
        const result = await clienteController.inserirCliente(body);
        return response.json(result);
    } catch (error) {
        return error;
    }
});

app.put("/editarCliente/:id", async function (request, response) {

    const id = request.params.id;
    const body = request.body;
    const result = await clienteController.editarCliente(body, id);
    return response.json(result);
});

app.delete("/deletarCliente/:id", async function (request, response) {

    const id = request.params.id;
    const body = request.body;
    const result = await clienteController.deletarCliente(body, id);
    return response.json(result);
});

app.get("/consulta-servico", async function (request, response) {
    try {
        const result = await servicoController.consultaServico();
        return response.json(result);
    } catch (error) {
        return error;
    }
});

app.post("/inserirServico", async function (request, response) {
    try {
        const body = request.body;
        const result = await servicoController.inserirServico(body);
        return response.json(result);
    } catch (error) {
        return error;
    }
});

app.put("/editarServico/:id", async function (request, response) {

    const id = request.params.id;
    const body = request.body;
    const result = await servicoController.editarServico(body, id);
    return response.json(result);
});

app.delete("/deletarServico/:id", async function (request, response) {

    const id = request.params.id;
    const body = request.body;
    const result = await servicoController.deletarServico(body, id);
    return response.json(result);
});

module.exports = app;