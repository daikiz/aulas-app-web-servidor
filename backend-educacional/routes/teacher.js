var express = require('express');
var router = express.Router();
var dbTeacher = require('../repository/db.teacher');
// var validarCadastroTeacher = require('../business/teacher.cadastro');
const BasicValidationError = require('../errors/basic.validation.error');
const TeacherModel = require('../model/teacher.model');
const { body, validationResult } = require('express-validator');

/* GET consulta de professores (agora precisa ser um função async) */
router.get('/', async function(req, res, next) {
  console.log('OPERAÇAO GET');
  res.json([]);  
});

/* POST cadastro de novos professores */
router.post('/', [
         body('endereco').isLength({ min: 10 }),
         body('telefone_fixo').isLength({ min: 12 })        
        ], 
async function(req, res, next) {  
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {  
      console.log('OPERAÇAO POST');
      console.log('Conteúdo do body' + JSON.stringify(req.body));
    
      // criando objeto de pessoa e preenchendo com os valores enviados no corpo da requisição
      const novoProfessor = new TeacherModel(
        req.body.id_pessoa, 
        req.body.data_contratacao, 
        req.body.curriculo, 
        req.body.observacoes, 
        req.body.salario,
        req.body.endereco,
        req.body.telefone_fixo,
        req.body.telefone_celular
      );    
      
      // validarCadastroTeacher.verificarSalario(novoProfessor.salario);
      await dbTeacher.insertNovoProfessor(novoProfessor);
      res.send('Cadastro com sucesso!');

    } catch(ex){ // SE DER MERDA , CAPTURA O ERRO
      if(ex instanceof BasicValidationError){
        console.log("BASIC VALIDATION ERROR - PLEASE FIX IT NOW!!!! " + ex);
        res.send(ex.message, 400);
      } else {
        console.log("ERROR - PLEASE FIX IT NOW!!!! " + ex);
        res.send('Deu ruim!', 500);
      }
          
    }
  });

// update / atualizar

// delete


module.exports = router;
