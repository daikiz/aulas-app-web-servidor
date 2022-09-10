var classeValidacao = {};

function verificarSalario(salario) {
  if(salario === 0 || salario < 0) {
    throw new ValidationError('Salário tem que ser maior que zero!');
  }
}

classeValidacao.verificarSalario = verificarSalario;

module.exports = classeValidacao;