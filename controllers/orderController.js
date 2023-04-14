const router = require('express').Router()
const { verifyToken } = require('../authentication/auth')
const { createOrder, getOrders } = require('../models/orderModel')

router.post('/add', verifyToken, createOrder)
router.get('/customerOrder', verifyToken, getOrders)


module.exports = router