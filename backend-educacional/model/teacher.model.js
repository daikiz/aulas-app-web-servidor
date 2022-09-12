var BasicValidationError = require('../errors/basic.validation.error');

function validarData (s) {
    var l = s.length
    var j = 0
    var dt = { 0: '', 1:'', 2:'' }
    
    // dias de cada mês
    var n = [ 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ]
    
    // divide a data para o objeto "dt"
    for (var i=0; i<l; i++) {
      var c = s[i]
      if (c!=='/')
        dt[j] += c
      else
        j++
    }
    
    // converte strings em número
    var d = +dt[0]
    var m = +dt[1]
    var y = +dt[2]
    
    // atualiza dias do ano bisexto
    n[2] += +(y % 400 === 0 || y % 4 === 0 && y % 100 !== 0)
    
    // regras de validação
    // mês deve ser entre 1-12 e dia deve ser maior que zero
    if (m<1 || m>12 || d<1) {
      return false
    }
    // valida número de dias do mês
    else if (d > n[m]) {
      return false
    }
    
    // passou nas validações
    return true
  }

class TeacherModel {
 constructor(id_pessoa, data_contratacao, curriculo, 
             observacoes, salario, endereco, telefone_fixo, telefone_celular) {
    
    // basic data validation
    if(id_pessoa === "" || id_pessoa === undefined) {
        let error = new BasicValidationError("ID Pessoa é obrigatório!");
        throw error;
    }

    if(salario === "" || salario === undefined || salario === 0 || salario < 0) {
        let error = new BasicValidationError("Salário é obrigatório e não pode ser zero!");
        throw error;
    }

    if(data_contratacao === "" || data_contratacao === undefined) {
        let error = new BasicValidationError("Data de contratação é obrigatória!");
        throw error;
    } 

    if( !validarData(data_contratacao) ) {
        let error = new BasicValidationError("Data de contratação é inválida!");
        throw error;
    }

    // create the object if everything is ok
    this.id_pessoa = id_pessoa;
    this.data_contratacao = data_contratacao;
    this.currriculo = curriculo;
    this.observacoes = observacoes;
    this.salario = salario;
    this.endereco = endereco;
    this.telefone_fixo = telefone_fixo;
    this.telefone_celular = telefone_celular;
  }
}

module.exports = TeacherModel;