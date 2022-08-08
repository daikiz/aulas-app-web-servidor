var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET consulta de pessoas (agora precisa ser um função async) */
router.get('/', async function(req, res, next) {
  
  console.log('OPERAÇAO GET');
  // inicializacao de um array (lista) vazia
  // await - para aqui e espera a Promise executar e trazer o seu resultado
  var arrPessoa = await db.selectPessoas();

  // traz a lista de pessoas do banco de dados tabela tb_pessoa 
  res.json(arrPessoa);

  // outra forma de lidar com promises
  /*
  db.selectPessoas().then(data => {
    // do something with data
    console.log("Data:" + data);
    res.json(data);
  })
  .catch(error => {
   // do something with error
   console.log("Deu ruim!!!" + error);
  })
  .finally(() => {
    console.log("Finally!!!");
  }); */
  
});

/* POST cadastro de novas pessoas */
router.post('/', function(req, res, next) {  
  console.log('OPERAÇAO POST');
  
  // criando objeto de pessoa e preenchendo com os valores enviados no corpo da requisição
  const novaPessoa = {};
  novaPessoa.nome = req.body.nome;

  db.insertNovaPessoa(novaPessoa);
  res.send('Cadastro com sucesso!');
});

/* PUT atualizar dados de pessoas */
router.put('/', function(req, res, next) {
  console.log('OPERAÇAO PUT');
  const idPessoa = req.body.idPessoa;
  const pessoaAtualizacao = {};
  pessoaAtualizacao.idPessoa = idPessoa;
  pessoaAtualizacao.nome = req.body.nome;

  db.updatePessoa(idPessoa, pessoaAtualizacao);
  res.send('Atualizacao com sucesso!');
});

/* DELETE exclusao de dados de pessoas */
router.delete('/', function(req, res, next) {
  console.log('OPERAÇAO DELETE');  
  res.send('Exclusão com sucesso!');
  const idPessoa = req.params.idPessoa;
  db.deletePessoa(idPessoa);
});

module.exports = router;
