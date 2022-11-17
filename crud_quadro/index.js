
const express = require("express");
const QuadroCrud = require("./quadroCrud.js");

const quadroCrud = new QuadroCrud();

const app = express();
app.use(express.json());
app.listen(3000);

app.get("/quadros", (req, res) => {
  return res.status(200).json(quadroCrud.readAll());
});

app.get("/quadros/:id", (req, res) => {
  const aluno = quadroCrud.read(parseInt(req.params.id));
  res.status(200).json(aluno);
});

app.post("/quadros", (req, res) => {
  const { numeroDeSerie, modelo, tamanho } = req.body;
  const quadro = {
    numeroDeSerie: numeroDeSerie,
    modelo: modelo,
    tamanho: tamanho,
  };
  quadroCrud.create(quadro);
  res.status(201).send();
});

app.put("/quadros/:id", (req, res) => {
  const { numeroDeSerie, modelo, tamanho } = req.body;
  const quadroAtualizado = {
    numeroDeSerie: numeroDeSerie,
    modelo: modelo,
    tamanho: tamanho,
  };
  quadroCrud.update(parseInt(req.params.id), quadroAtualizado);
  res.status(200).send();
});

app.delete("/alunos/:id", (req, res) => {
  quadroCrud.delete(parseInt(req.params.id));
  res.status(200).send();
});