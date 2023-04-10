const Product = require('../schemas/productSchema')


// POST
exports.createProduct = (req, res) => {
  const { productName, productDescription, productPrice, productImgURL} = req.body

  if (!productName || !productDescription || !productPrice || !productImgURL) {
    return res.status(400).json({
      message: 'Could not create product'
    })
  }

  Product.create({ productName, productDescription, productPrice, productImgURL })
  .then(data => {
    res.status(201).json(data)
  })
  .catch(err => {
    res.status(500).json({
      message: 'Something went wrong when creating product'
    })
  })
}

// GET
exports.getProduct = (req, res) => {
  Product.find()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({
        message: 'Could not find product'
      })
    })
    
}

// GET BY ID
exports.getProductById = (req, res) => {
  Product.findById(req.params.id)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({
        message: 'Could not find product with that ID'
      })
    })
}