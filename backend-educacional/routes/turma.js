var express = require('express');
var router = express.Router();

/* GET consulta de turmas */
router.get('/', function(req, res, next) {
  
  console.log('OPERAÇAO GET TURMAS');
  // inicializacao de um array (lista) vazia
  var arrTurma = [];

  // traz a lista de pessoas do banco de dados tabela tb_pessoa 
  res.json(arrTurma);
});

/* POST cadastro de turmas */
router.post('/', function(req, res, next) {  
    console.log('OPERAÇAO POST TURMAS');
});

/* DELETE exclusao de turmas */
router.delete('/', function(req, res, next) {  
    console.log('OPERAÇAO DELETE TURMAS');
});

/* ATUALIZAR / UPDATE de turmas */
router.put('/', function(req, res, next) {  
    console.log('OPERAÇAO DELETE TURMAS');
});

module.exports = router;
