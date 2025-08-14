const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// Array de curiosidades
const curiosidades = [
  "O primeiro bug de computador registrado foi uma mariposa presa em um relé em 1947.",
  "O primeiro e-mail da história foi enviado em 1971 por Ray Tomlinson.",
  "O termo 'bug' para erro de programação já era usado antes dos computadores, no século XIX."
];

// Rota para retornar curiosidade aleatória
app.get('/curiosidade', (req, res) => {
  const index = Math.floor(Math.random() * curiosidades.length);
  res.json({ curiosidade: curiosidades[index] });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
