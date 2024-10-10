// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! SÓ MEXER CASO TIVER ALGUM ERRO !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
const express = require('express')
const app = express()
app.use( express .json ())

const cr_user = require('./routes/user')
app.use('/user', cr_user)

//const cr_quadra = require('./routes/quadra')
//app.use('/quadra', cr_quadra)

const cr_evento = require('./routes/evento')
app.use('/event', cr_evento)

const cr_pagamento = require('./routes/pagamento')
app.use('/pagamento', cr_pagamento)

app.listen(3000, () => {
    console.log('http://localhost:3000')
})