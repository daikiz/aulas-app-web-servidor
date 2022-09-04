var express = require('express');
var router = express.Router();
var dbTeacher = require('../repository/db.teacher');

/* GET consulta de professores (agora precisa ser um função async) */
router.get('/', async function(req, res, next) {
  console.log('OPERAÇAO GET');
  res.json([]);  
});

/* POST cadastro de novos professores */
router.post('/', async function(req, res, next) {  
    console.log('OPERAÇAO POST');
    console.log('Conteúdo do body' + JSON.stringify(req.body));
    
    // criando objeto de pessoa e preenchendo com os valores enviados no corpo da requisição
    const novoProfessor = {};
    novoProfessor.id_pessoa = req.body.id_pessoa;
    novoProfessor.data_contratacao = req.body.data_contratacao;
    novoProfessor.currriculo = req.body.curriculo;
    novoProfessor.observacoes = req.body.observacoes;
    novoProfessor.salario = req.body.salario;
    novoProfessor.endereco = req.body.endereco;
    novoProfessor.telefone_fixo = req.body.telefone_fixo;
    novoProfessor.telefone_celular = req.body.telefone_celular;
  
    try {
      await dbTeacher.insertNovoProfessor(novoProfessor);
      res.send('Cadastro com sucesso!');
    } catch(ex){ // SE DER MERDA , CAPTURA O ERRO
        console.log("ERROR - PLEASE FIX IT NOW!!!! " + ex);
        res.send('Deu ruim!', 500);
    }
  });

// update / atualizar

// delete


module.exports = router;
