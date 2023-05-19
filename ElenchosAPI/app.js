const express = require("express");
const rotaCategorias = require("./rotes/categorias");
const rotaGastos = require("./rotes/gastos");
// const rotaLancamentos = require("./rotes/lancamentos");
// const rotaSaldos = require("./rotes/saldos");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use('/categorias', rotaCategorias);
app.use('/gastos', rotaGastos);
// app.use('/lancamentos', rotaLancamentos);
// app.use('/saldos', rotaSaldos);

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
});