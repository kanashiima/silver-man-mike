console.log('in the node console');

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World This is John.')
})

app.listen(3000)