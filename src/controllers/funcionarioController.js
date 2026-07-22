const { default: axios } = require("axios")
const Funcionario = require("../models/funcionario")

exports.cadastrar = async (req,res) => {

    const funcionario = await Funcionario.create(req.body)

    await axios.post(`${process.env.API_BENEFICIOS}/beneficios`,{
                funcionarioId: funcionario.id,
                salario:funcionario.salario,
                cargo: funcionario.cargo
            })

    res.status(201).json(funcionario)
}
exports.listar = async(req,res) => {
    const funcionarios = await Funcionario.findAll()
    res.status(200).json(funcionarios)
}