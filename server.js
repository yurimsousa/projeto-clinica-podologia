const app = require("./api/localApi/app");
const port = normalizaPort('3001');
function normalizaPort(val) {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
if (port >= 0) {
        return port;
    }
return false;
}
app.listen(port, function () {
    console.log(`aplicacao rodando na porta: ${port}`)
})