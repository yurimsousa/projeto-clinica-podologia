const ApiController = require("../controller/apiController");
const apiController = new ApiController();

const express = require("express");
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get("/consulta-funcionario", async function (request, response) {
    try {
        const result = await apiController.consultaFuncionario();
        return response.json(result);
    } catch (error) {
        return error;
    }
});

app.post("/inserirFuncionario", async function (request, response) {
    try {
        const body = request.body;
        const result = await apiController.inserirFuncionario(body);
        return response.json(result);
    } catch (error) {
        throw new Error(`erro ao inserir funcionario`);
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

app.patch("/editarTodosFuncionario", async function (request, response) {

    const body = request.body;
    const result = await funcionarioController.editarTodosFuncionario(body);
    return response.json(result);
});

app.post("/incluirFuncionario", async function (request, response) {

    const body = request.body;
    const result = await funcionarioController.incluirFuncionario(body);
    return response.json(result);
});



module.exports = app;