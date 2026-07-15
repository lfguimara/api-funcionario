    const Funcionario = require("../models/funcionario")

    exports.cadastrar = async(req,res) => {
        
        try {

            const funcionario = await Funcionario.create(req.body)
        res.status(201).json(funcionario)
            
        } catch (error) {
            console.log(error)
            res.status(500).json({mensage:"Erro de Servidor"})
        }
    
    }

    exports.listar = async(req,res) => {

        //select * from funcionarios
        const funcionarios = await Funcionario.findAll()
        res.status(200).json(funcionarios)
    }