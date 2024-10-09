const express = require('express')
const router = express.Router() // Esse express.Router() precisa ser escrito dessa forma com o R maiusculo

var vpayments = []

function create_payment(req, res) {

    let { tipo, nome, numero, validade, cvv, chave, valor } = req.body

    var opayment = {
        id: vpayments.length + 1,
        tipo: tipo,
        nome: nome,
        numero: null,
        validade: null,
        cvv: null,
        chave: null,
        valor: null,
        deletedAt: null
    }
    
    if (tipo === 'cartao') {
        opayment.numero = numero;
        opayment.validade = validade;
        opayment.cvv = cvv;
    } else if (tipo === 'pix') {
        opayment.chave = chave;
    } else if (tipo === 'boleto') {
        opayment.valor = valor;
    }

    Object.keys(opayment).forEach(key => {
        if (opayment[key] === null) {
            delete opayment[key];
        }
    })

    vpayments.push(opayment)

    return res.status(201).json({ 
        message: 'Dados cadastrados!'
    })
}

router.post('/create', create_payment)


function read_payment(req, res) {

    return res.status(202).json({
        message: "Encontrei",
    //  db: vpayments[idx]
        db: vpayments.filter( u => u.deletedAt == null)
    })
}

router.get('/read', read_payment)


function show_payment (req, res) {

    let { id } = req.params;

    const idx = vpayments.findIndex(u => u.id == id)

    if (idx === -1 || vpayments[idx].deletedAt != null){
        return res.status(404).json({
        message: "Não encontrado",
        db: null
    })
}

    return res.status(200).json({
        message: "Cadastro encontrado",
        db: vpayments[idx]
    })
}

router.get('/show/:id', show_payment)


function update_payment (req, res) {

    let { id } = req.params

    // aqui no vpayments[idx] ele está pegando o objeto dentro do vetor, se não colocar o [idx] ele não encontrará o deletedAt pois o mesmo está dentro do vetor
    const idx = vpayments.findIndex(u => u.id == id)

    if (idx == -1 || vpayments[idx].deletedAt != null) {
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

router.put('/update/:id', update_payment)


function delete_payment (req, res) {

    let { id } = req.params

    const idx = vpayments.findIndex(u => u.id == id)

    if(idx != -1){
        vpayments[idx].deletedAt = new Date()
        return res.status(203).json({
            message: "Foi de vasco",
        })
}

    return res.status(404).json({
        message: "Não encontrado",
    })
}

router.delete('/delete/:id', delete_payment)

module.exports = router
