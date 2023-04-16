const product = require('../schemas/productSchema')


// CREATE A PRODUCT
exports.createProduct = (req, res) => {
  const { name, description, price, imageURL} = req.body

  if (!name || !description || !price || !imageURL) {
    return res.status(400).json({
      message: 'Could not create product'
    })
  }

  product.create({ name, description, price, imageURL })
  .then(data => {
    res.status(201).json(data)
  })
  .catch(err => {
    res.status(500).json({
      message: 'Something went wrong when creating product'
    })
  })
}

// GET ALL PRODUCTS
exports.getProduct = (req, res) => {
  product.find()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({
        message: 'Could not find products'
      })
    })
}

// GET PRODUCT BY ID
exports.getProductById = (req, res) => {
  product.findById(req.params.id)
    .then(data => {
      if (!data) {
        res.status(404).json({
          message: 'Could not find that product'
        })
        return
      }
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({
        message: 'Something went wrong when getting product'
      })
    })
}

// UPDATE PRODUCT BY ID
exports.updateProduct = (req, res) => {

  product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(data => {
      if (!data) {
        res.status(404).json({
          message: 'Could not find that product'
        })
        return
      }
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({
        message: 'Something went wrong when updating product'
      })
    })
}

// DELETE PRODUCT BY ID
exports.deleteProduct = (req, res) => {
  product.findByIdAndDelete(req.params.id)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json({
        message: 'Could not find product with that ID'
      })
    })
}