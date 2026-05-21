import express from 'express'
const app = express()

app.get('/usuario', (req, res) =>{
  res.send('Olá Mundo')

})

app.listen(3000)

// node --watch server.js