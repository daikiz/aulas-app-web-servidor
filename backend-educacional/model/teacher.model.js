var BasicValidationError = require('../errors/basic.validation.error');

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