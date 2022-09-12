var db = require('../db');

async function selectProfessores(){
    const conn = await db.connect();
    const [rows] = await conn.query('SELECT * FROM tb_professor;');
    console.log('Linhas:' + rows);
    return rows;
}

async function insertNovoProfessor(professor){
    
    const conn = await db.connect();

    const sql = 'INSERT INTO tb_professor ' +
    '(id_pessoa, ' +
    'data_contratacao, ' +
    'curriculo, ' +
    'observacoes, ' +
    'salario, ' +
    'endereco, ' +
    'telefone_fixo, ' +
    'telefone_celular) ' +
    'VALUES (?, STR_TO_DATE(?, "%d/%m/%Y"), ' + 
    '?, ?, ?, ?, ?, ?)';
    
    const values = [professor.id_pessoa, 
        professor.data_contratacao,
        professor.curriculo,
        professor.observacoes,
        professor.salario, 
        professor.endereco,
        professor.telefone_fixo,
        professor.telefone_celular
    ];

    return await conn.query(sql, values);
}
 
module.exports = {selectProfessores, insertNovoProfessor}