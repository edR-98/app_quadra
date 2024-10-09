var vpagamentos = []

function create_pagamento(req, res) {

    let { tipo, nome, numero, validade, cvv, chave, valor } = req.body

    var opagamento = {
        id: vpagamentos.length + 1,
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
        opagamento.numero = numero;
        opagamento.validade = validade;
        opagamento.cvv = cvv;
    } else if (tipo === 'pix') {
        opagamento.chave = chave;
    } else if (tipo === 'boleto') {
        opagamento.valor = valor;
    }

    Object.keys(opagamento).forEach(key => {
        if (opagamento[key] === null) {
            delete opagamento[key];
        }
    })

    vpagamentos.push(opagamento)

    return res.status(201).json({ 
        message: 'Dados cadastrados!'
    })
}

function read_pagamento(req, res) {

    return res.status(202).json({
        message: "Encontrei",
    //  db: vpagamentos[idx]
        db: vpagamentos.filter( u => u.deletedAt == null)
    })
}

function show_pagamento (req, res) {

    let { id } = req.params;

    const idx = vpagamentos.findIndex(u => u.id == id)

    if (idx === -1 || vpagamentos[idx].deletedAt != null){
        return res.status(404).json({
        message: "Não encontrado",
        db: null
    })
}

    return res.status(200).json({
        message: "Cadastro encontrado",
        db: vpagamentos[idx]
    })
}

function update_pagamento (req, res) {

    let { id } = req.params

    // aqui no vpagamentos[idx] ele está pegando o objeto dentro do vetor, se não colocar o [idx] ele não encontrará o deletedAt pois o mesmo está dentro do vetor
    const idx = vpagamentos.findIndex(u => u.id == id)

    if (idx == -1 || vpagamentos[idx].deletedAt != null) {
        return res.status(404).json({
        message: "Não encontrado",
        db: null
    })

}
    let {nome, numero, validade, cvv} = req.body

    if(nome) vpagamentos[idx].nome = nome
    if(numero) vpagamentos[idx].numero = numero
    if(validade) vpagamentos[idx].validade = validade
    if(cvv) vpagamentos[idx].cvv = cvv

    return res.status(200).json({
        message: "Encontrado",
        db: vpagamentos[idx]
    })
}

function delete_pagamento (req, res) {

    let { id } = req.params

    const idx = vpagamentos.findIndex(u => u.id == id)

    if(idx != -1){
        vpagamentos[idx].deletedAt = new Date()
        return res.status(203).json({
            message: "Foi de vasco",
        })
}

    return res.status(404).json({
        message: "Não encontrado",
    })
}

// Função anônima
module.exports = {
    create_pagamento,
    show_pagamento,
    read_pagamento,
    update_pagamento,
    delete_pagamento
}
// Todo vez que os arquvios forem pegar informações uns dos outros é preciso importar e exportar.
// Nessa caso eu estou exportando minhas funções (nomes delas) para o arquivo "pagamento.js" que está na pasta "routes"