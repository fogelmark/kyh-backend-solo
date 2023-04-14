const router = require('express').Router()
const customerModel = require('../models/customerModel')
const auth = require('../authentication/auth')

router.post('/register', customerModel.registerUser)

router.post('/login', customerModel.userLogin)

// router.get('/me', auth.verifyToken, customerModel.getCustomerData)

module.exports = router