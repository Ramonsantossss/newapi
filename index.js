const express = require('express');
const app = express();
const obterMangas = require('./test'); // Ajuste para o nome correto do arquivo

app.get('/all', async (req, res) => {
  try {
    const mangas = await obterMangas.manga(); // Chama a função que realiza o scraping

    res.json(mangas); // Retorna os mangás encontrados como resposta JSON
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
