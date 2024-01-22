import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();


const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()



export async function getDados() {
    const [result] = await pool.query("SELECT cadastro_usuario.id , cadastro_usuario.nome, cadastro_usuario.sobrenome, pessoa_fisica.cpf FROM cadastro_usuario LEFT JOIN pessoa_fisica ON cadastro_usuario.id = pessoa_fisica.cadastro_usuario_id");
    return result;
}

export async function getDado(id){
    const [result] = await pool.query(`Select * from cadastro_usuario where id = ?`,[id]);
    return result[0]
}
export async function createDados(nome, sobrenome, cpf) {
    try {
        const [result] = await pool.query('INSERT INTO cadastro_usuario (nome, sobrenome) VALUES (?, ?)', [nome, sobrenome]);
        const id = result.insertId;

        await pool.query('INSERT INTO pessoa_fisica (cpf, cadastro_usuario_id) VALUES (?, ?)', [cpf, id]);

        console.log('Dados criados com sucesso!');
    } catch (error) {
        console.error('Erro ao criar dados:', error);
   
    }
}



