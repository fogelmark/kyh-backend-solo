const jwt = require('jsonwebtoken')
require('dotenv').config()
const secretKey = process.env.SECRET_KEY


exports.generateToken = (customer) => {
  return jwt.sign({ _id: customer._id, displayName: customer.displayName }, secretKey, { expiresIn: '1d' })
}

exports.verifyToken = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    // req.customerData = jwt.verify(token, secretKey)
    req.userId = jwt.verify(token, secretKey)._id
    next()
  } catch (error) {
    return res.status(401).json({
      message: 'Login to gain access!'
    })
  }
}