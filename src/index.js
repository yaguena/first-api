const express = require('express')
const app = express()

app.get('/', (request, response) => {
  return response.send('Olá Dev!')
})

app.listen(3000)
