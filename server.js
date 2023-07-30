const { obtenerPosts, agregarPost } = require('./consultas')
const express = require('express')
const app = express()
app.use(express.json())
const cors = require('cors')

app.listen(3000, console.log("Servidor encendido en puerto 3000"))

app.use(cors())


app.get("/posts", async (req, res) => {
    const posts = await obtenerPosts()
    res.json(posts)
})

app.post("/posts", async (req, res) => {
    const { titulo, url, descripcion } = req.body
    await agregarPost(titulo, url, descripcion)
    res.send("Post agregado con éxito")
})