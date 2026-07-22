const app = require("./app")
require("dotenv").config()

const PORT = 3010

app.listen(PORT, () => {
console.log(`Servidor iniciando na porta ${PORT}`)
} )