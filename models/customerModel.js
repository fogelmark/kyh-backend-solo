const _customer = require('../schemas/customerSchema')
const bcrypt = require('bcryptjs')
const auth = require('../authentication/auth')

exports.registerUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body

  if (!firstName || !lastName || !email || !password) {
     return res.status(404).json({
      message: 'Please enter all the fields'
    })
  }

  const result = await _customer.exists({ email })

  if (result) {
    return res.status(400).json({
      message: 'Email already exists'
    })
  }

  const salt = bcrypt.genSaltSync()
  bcrypt.hash(password, salt, (err, hash) => {

    if (err) {
      return res.status(500).json({
        message: 'Error when encrypting password'
      })
    }

    _customer.create({
      firstName,
      lastName,
      email,
      passwordHash: hash
    })
    .then(customer => {
      res.status(201).json({
        token: auth.generateToken(customer)
      })
    })
  })
}

exports.userLogin = (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(404).json({
      message: 'Please enter all the fields'
    })
  }

  _customer.findOne({ email })
  .then(customer => {
    if (!customer) {
      return res.status(401).json({
        message: 'Invalid credentials'
      })
    }

    bcrypt.compare(password, customer.passwordHash, (err, result) => {
      if (err) {
        return res.status(500).json({
          message: 'Error when decrypting password'
        })
      }

      if (!result) {
        return res.status(401).json({
          message: 'Invalid credentials'
        })
      }

      res.status(200).json({ token: auth.generateToken(customer) })
    })
  })
}

// exports.getCustomerData = (req, res) => {
//   const { _id, displayName } = req.customerData

//   _customer.findById(_id)
//     .then(customer => {
//       res.status(200).json(customer)
//     })
// }