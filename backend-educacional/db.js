// funçao que conecta ao banco de dados MySQL usando a lib mysql2
async function connect(){
    console.log("Conectando no database MySQL....");
    if(global.connection && global.connection.state !== 'disconnected')
        return global.connection;

    const mysql = require("mysql2/promise");
    
    // configurações do banco de dados
    const dbusuario = "root";
    const dbsenha = "root";
    const dbservidor = "localhost";
    const dbporta = "3306";
    const dbnome = "db_sistema_educacional";

    // const connection = await mysql.createConnection("mysql://root:root@localhost:3306/db_sistema_educacional");
    const connection = await mysql.createConnection("mysql://" + dbusuario + ":" + dbsenha + "@" + dbservidor + ":" + dbporta + "/" + dbnome);
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

async function selectPessoas(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM tb_pessoa;');
    console.log('Linhas:' + rows);
    return rows;
}

async function insertNovaPessoa(pessoa){
    const conn = await connect();
    const sql = 'INSERT INTO tb_pessoa(nome,idade,uf) VALUES (?,?,?);';
    const values = [pessoa.nome, pessoa.idade, pessoa.uf];
    return await conn.query(sql, values);
}

async function updatePessoa(id, pessoa){
    const conn = await connect();
    const sql = 'UPDATE tb_pessoa SET nome=?, idade=?, uf=? WHERE id=?';
    const values = [customer.nome, customer.idade, customer.uf, id];
    return await conn.query(sql, values);
}

async function deletePessoa(id){
    const conn = await connect();
    const sql = 'DELETE FROM tb_pessoa where id_pessoa=?;';
    return await conn.query(sql, [id]);
}

async function queryGenerica(sql, params) {
  const connection = await mysql.createConnection(config.db);
  const [results, ] = await connection.execute(sql, params);
  return results;
}

// funções de aluno

// funções de professor
 
module.exports = {connect, selectPessoas, insertNovaPessoa, updatePessoa, deletePessoa, queryGenerica}