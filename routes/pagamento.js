const express = require('express')
const router = express.Router() // Esse express.Router() precisa ser escrito dessa forma com o R maiusculo

// "c" de controler e o nome do objeto "pagamento"
const cpagamento = require('../controllers/pagamento') // Essa "const" é o caminho que chama todas as funções que estão na pasta ./controllers/pagamento
// Dentro do cpagamento terá minhas funções

router.post('/create', cpagamento.create_pagamento)

router.get('/read', cpagamento.read_pagamento)

router.get('/show/:id', cpagamento.show_pagamento)

router.put('/update/:id', cpagamento.update_pagamento)

router.delete('/delete/:id', cpagamento.delete_pagamento)

module.exports = router
