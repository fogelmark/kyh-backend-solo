const mongoose = require('mongoose')
const app = require('./app')
require('dotenv').config()


const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log('server running on: ' + PORT))

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('connected to database'))
  .catch(err => console.log(err))