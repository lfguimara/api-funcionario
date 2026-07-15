require("dotenv").config()
const app = require("./app")
const sequelize = require("./config/database")

const PORT = 3010



sequelize.sync()


app.listen(PORT,()=>{
    console.log(`Servidor iniciado na porta ${PORT}`)
})