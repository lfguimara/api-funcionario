const express = require("express")

const app = express()

app.use(express.json())

// Banco de dados em memória
const funcionarios = []

// rota para cadastrar
app.post("/funcionarios", (req, res) => {
    const { nome, cargo } = req.body

    const funcionario = {
        nome,
        cargo
    }

    funcionarios.push(funcionario)
    res.status(201).json(funcionario)
})

app.get("/funcionarios", (req, res) => {

    res.status(200).json(funcionarios)

})

module.exports = app