const router = require('express').Router()
const auth = require('../authentication/auth')

const productModel = require('../models/productModel')

router.get('/', productModel.getProduct)
router.get('/:id',  productModel.getProductById)

router.post('/', productModel.createProduct)

router.put('/:id', productModel.updateProduct)

router.delete('/:id', productModel.deleteProduct)


module.exports = router