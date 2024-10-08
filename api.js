const express = require('express')
const app = express()
app.use( express .json ())

const   cr_payment = require('./payment')
app.use('/payment', cr_payment)

const   cr_user = require('./payment')
app.use('/payment', cr_user)

const   cr_quadra = require('./payment')
app.use('/payment', cr_quadra)

app.listen(3000, () => {
    console.log('http://localhost:3000')
})