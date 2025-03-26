const express = require('express');

//o app significa que está iniciando um servidor em express
const app = express();

const port = 3000;

//esse metodo vai criar um endPoint que vai ser usado pelo front
app.get('/Arthur', (req, res) => {
    //está enviando como resposta a frase Hello, world!
    res.send('Hello, world!');
});

//esse metodo vai criar um endPoint que vai ser usado pelo front
//req e res são objetos, (REQ{OBJETO DE REQUISIÇÃO} E ({RES É OBJETO DE RESPOSTA}))
// => FUNÇÃO ALTO EXECUTÁVEL = CALLBACK
app.get('/Teste', (req, res) => {

    const userId = req.query.id;
    const userName = req.query.name;
    const userPassword = req.query.userPassword;

    //está enviando como resposta a frase Hello, world!
    res.send(`O parametro passado foi: ${userId} e ${userName} e ${userPassword}`);
});


//oqui a requisição vai ser ultilizada na porta 3000 (const port = 3000)
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)});
//define o endpoint

