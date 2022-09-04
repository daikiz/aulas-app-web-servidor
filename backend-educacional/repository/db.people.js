var db = require('../db');

async function selectPessoas(){
    const conn = await db.connect();
    const [rows] = await conn.query('SELECT * FROM tb_pessoa;');
    console.log('Linhas:' + rows);
    return rows;
}

async function insertNovaPessoa(pessoa){
    const conn = await db.connect();
    const sql = 'INSERT INTO tb_pessoa(nome,idade,uf) VALUES (?,?,?);';
    const values = [pessoa.nome, pessoa.idade, pessoa.uf];
    return await conn.query(sql, values);
}

async function updatePessoa(id, pessoa){
    const conn = await db.connect();
    const sql = 'UPDATE tb_pessoa SET nome=?, idade=?, uf=? WHERE id=?';
    const values = [customer.nome, customer.idade, customer.uf, id];
    return await conn.query(sql, values);
}

async function deletePessoa(id){
    const conn = await db.connect();
    const sql = 'DELETE FROM tb_pessoa where id_pessoa=?;';
    return await conn.query(sql, [id]);
}
 
module.exports = {selectPessoas, insertNovaPessoa, updatePessoa, deletePessoa}