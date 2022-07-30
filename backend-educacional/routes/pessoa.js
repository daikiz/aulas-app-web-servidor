var express = require('express');
var router = express.Router();

/* GET consulta de pessoas */
router.get('/', function(req, res, next) {
  
  console.log('OPERAÇAO GET');
  // inicializacao de um array (lista) vazia
  var arrPessoa = [];

  // traz a lista de pessoas do banco de dados tabela tb_pessoa 
  res.json(arrPessoa);
});

/* POST cadastro de novas pessoas */
router.post('/', function(req, res, next) {  
  console.log('OPERAÇAO POST');
  res.send('Cadastro com sucesso!');
});

/* PUT atualizar dados de pessoas */
router.put('/', function(req, res, next) {
  console.log('OPERAÇAO PUT');
  res.send('Atualizacao com sucesso!');
});

/* DELETE exclusao de dados de pessoas */
router.delete('/', function(req, res, next) {
  console.log('OPERAÇAO DELETE');  
  res.send('Exclusão com sucesso!');
});

module.exports = router;
