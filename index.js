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


app.use(express.json());


//metodo post é usando para enviar dados do front para o back-end
//       o end point é o /user nesse caso
app.post('/user', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;

    if(!id || !name){
        return res.status(400).json({message: 'ID e nome são obrigatórios!'});
    }

    res.json({
        message: `Usuário ${name} com ID ${id} foi criado com sucesso!`,
        user: {id, name},
    });

});


//o metodo put é usado para alterar alguma coisa do back-end
//       o end point é o /alteracao nesse caso
app.put('/alteracao', (req, res) =>{
    const idPut = req.body.idPut;
    const namePut = req.body.namePut;

    if(!idPut || !namePut){
        return res.status(400).json({mensagem: 'ID AND NOME SÃO OBRIGATORIOS!!!'});
    }

    res.json({
        mensagem: `USUÁRIO ${namePut} com o ID ${idPut} foi criado com sucesso`,
        user: {idPut, namePut},
    });
} );

app.delete('/deletar', (req, res) => {
    const idDelete = req.query.id;
    const nameDelete = req.query.name;

    console.log(idDelete);
    console.log(nameDelete);

    if(!idDelete || !nameDelete){
        return res.status(400).json({mensagem: 'O ID OU O NOME NÃO PODE SER DELETADO'});
    }

    res.json({

        mensagem: `O ID: ${idDelete} e o NOME: ${nameDelete} foram deletados!!`,
        user: {idDelete, nameDelete}
    });
});


//oqui a requisição vai ser ultilizada na porta 3000 (const port = 3000)
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)});
//define o endpoint

