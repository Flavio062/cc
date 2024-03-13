const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

// Middleware para analisar dados de formulário
app.use(express.urlencoded({ extended: true }));

// Rota para servir o formulário HTML
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/formulario.html');
});

// Rota para lidar com a solicitação POST do formulário
app.post('/salvar', (req, res) => {
    const dados = req.body;
    const infoString = `${dados.info1}, ${dados.info2}, ${dados.info3}, ${dados.info4}, ${dados.info5}\n`;
    // Salva os dados em um arquivo
    fs.appendFileSync('dados.txt', infoString);
    res.send('Informações salvas com sucesso!');
});

// Inicia o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});