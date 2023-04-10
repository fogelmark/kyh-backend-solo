const router = require('express').Router()

const productModel = require('../models/productModel')

router.post('/', productModel.createProduct)

router.get('/', productModel.getProduct)
router.get('/:id', productModel.getProductById)

module.exports = router