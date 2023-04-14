const mongoose = require('mongoose')
const { Schema } = mongoose

const customerSchema = new Schema({
  firstName:      { type: String, required: true },
  lastName:       { type: String, required: true },
  email:          { type: String, required: true, unique: true },
  passwordHash:   { type: String, required: true }

}, { timestamps: true })

customerSchema.virtual('displayName').get(function() {
  return `${this.firstName} ${this.lastName}`
})

module.exports = mongoose.model('Costumer', customerSchema)