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

async function queryGenerica(sql, params) {
  const connection = await mysql.createConnection(config.db);
  const [results, ] = await connection.execute(sql, params);
  return results;
}
 
module.exports = {connect, queryGenerica}