const request = require("supertest")

const app = require("../app")

//Escrita de um teste
describe("API de funcionarios", () => {
    
    It("Deve cadastrar um funcionario", async () => {
        const resposta = await request(app)
        .post("/funcionarios")
        .send({
            nome: "Maria",
            cargo: "Analista"
        })
        expect(resposta.statusCode.toBe(201))

        expect(resposta.body.nome.toBe("Maria"))

        expect(resposta.body.cargo.toBe("Analista"))
    })

})