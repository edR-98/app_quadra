const express = require('express')
const app = express()
app.use( express .json ())

const cr_payment = require('./payment')
app.use('/payment', cr_payment)

app.listen(3000, () => {
    console.log('http://localhost:3000')
})