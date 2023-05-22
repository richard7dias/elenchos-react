const express = require("express");
const rotaCategorias = require("./rotes/categorias");
const rotaFonteDeGastos = require("./rotes/fonteGastos");
const rotaLancamentos = require("./rotes/lancamentos");
const rotaSaldos = require("./rotes/saldos");
const cors = require("cors");
const app = express();
const port = 8000;

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use('/categorias', rotaCategorias);
app.use('/fonte-gastos', rotaFonteDeGastos);
app.use('/lancamentos', rotaLancamentos);
app.use('/saldos', rotaSaldos);

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
});