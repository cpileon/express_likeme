const { Pool } = require('pg')
const pool = new Pool({
host: 'localhost',
user: 'postgres',
password: 'Administradora',
database: 'likeme',
allowExitOnIdle: true
})

const obtenerPosts = async () => {
    const { rows } = await pool.query("SELECT * FROM posts")
    console.log(rows)
    return rows
}

const agregarPost = async (titulo, url, descripcion) => {
    const consulta = "INSERT INTO posts values (DEFAULT, $1, $2, $3, 0)"
    const values = [titulo, url, descripcion]
    const result = await pool.query(consulta, values)
    console.log("Post agregado")
}

module.exports = { obtenerPosts, agregarPost } 