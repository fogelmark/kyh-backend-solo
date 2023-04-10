const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
  productName:            { type: String, required: true },
  productDescription:     { type: String, required: true },
  productPrice:           { type: String, required: true },
  productImgURL:        { type: String, required: true }
}, { timestamps: true })

// userSchema.virtual('product').get(function() {
//   return this.productName
// })

module.exports = mongoose.model('Product', productSchema)