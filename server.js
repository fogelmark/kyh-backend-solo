const app = require('./app')
require('dotenv').config()
const mongoose = require('mongoose')


const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log('server running on: ' + PORT))
mongoose.connect(process.env.MONGO_URI)
.then()
  .then(() => console.log('connected to db'))
  // .then(err => console.log(err))