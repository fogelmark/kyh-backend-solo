const express = require('express')
const app = express()
const cors = require('cors')

// MIDDLEWARE
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// CONTROLLERS
app.use('/api/products', require('./controllers/productController'))
app.use('/api/customer', require('./controllers/customerController'))
app.use('/api/orders', require('./controllers/orderController'))


module.exports = app