const mongoose = require('mongoose')
const order = require('../schemas/orderSchema')

// CREATE ORDER
exports.createOrder = async (req, res) => {
  const { orderRows } = req.body

  if (!orderRows) {
    return res.status(400).json({
      message: 'You need to enter all fields'
    })
  }

  try {
    const data = await order.create({
      orderRows,
      userId: req.userId
    })

    res.status(201).json({ userId: data.userId })

  } catch (error) {
    return res.status(500).json({
      message: 'Error when creating order'
    })
  }
}

exports.getOrders = async (req, res) => {
  const orders = await order.find({ userId: req.userId })

  res.status(200).json(orders)
}