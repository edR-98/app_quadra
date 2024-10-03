const express = require('express')
const app = express()
const port = 3001

app.use(express.json())

var vpayments = []

app.post('/payment', createPayment)

function createPayment(req, res) {
    let { tipo, nome, numero, validade, cvv, chave, valor } = req.body;

    var opayment = {
        id: vpayments.length + 1,
        tipo: tipo,
        nome: nome,
        // Adicionar outros campos pelo tipo
        ...(tipo === 'cartao' ? { numero, validade, cvv } : {}),
        ...(tipo === 'pix' ? { chave } : {}),
        ...(tipo === 'boleto' ? { valor } : {}),
        deletedAt: null
    };

    vpayments.push(opayment);

    return res.status(201).json({ 
        message: 'Dados cadastrados!'
    });
}


app.get('/payment', show_payment)

function show_payment(req, res) {

    let {id} = req.params

    const idx = vpayments.findIndex(u => u.id == id)

    if(idx == -1 || vpayments[idx].deletedAt != null){
        return res.status(404).json({
        message: "Não encontrado",
        db: null
    })
}

    return res.status(202).json({
        message: "Encontrei",
        db: vpayments[idx]
    //  db: vpayments.filter( u => u.deletedAt == null)
    })
}

app.get('/payment/:id', read_payment)

function read_payment (req, res) {

    let { id } = req.params;

    const idx = vpayments.findIndex(u => u.id == id)

    if(idx === -1)
        return res.status(404).json({
        message: "Não encontrado",
        db: null
    })

    return res.status(200).json({
        message: "Cadastro encontrado",
        db: vpayments[idx]
    })
}

app.put('/payment/:id', update_payment)

function update_payment (req, res) {

    let { id } = req.params;

    // aqui no vpayments[idx] ele está pegando o objeto dentro do vetor, se não colocar o [idx] ele não encontrará o deletedAt pois o mesmo está dentro do vetor
    const idx = vpayments[idx].findIndex(u => u.id == id)

    if(idx == -1 || vpayments.deletedAt != null){
        return res.status(404).json({
        message: "Não encontrado",
        db: null
    })

}
    let {nome, numero, validade, cvv} = req.body

    if(nome) vpayments[idx].nome = nome
    if(numero) vpayments[idx].numero = numero
    if(validade) vpayments[idx].validade = validade
    if(cvv) vpayments[idx].cvv = cvv

    return res.status(200).json({
        message: "Encontrado",
        db: vpayments[idx]
    })
}

app.put('/payment/:id', delete_payment)

function delete_payment (req, res) {

    let { id } = req.params;

    const idx = vpayments.findIndex(u => u.id == id)

    if(idx != -1)

        return res.status(404).json({
        message: "Não encontrado",
        db: null
    })

    let {nome, numero, validade, cvv} = req.body

    return res.status(200).json({
        message: "Encontrado",
        db: vpayments[idx]
    })
}


app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})