const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Express !! Welcome your friend ankit mishra!')
})

app.listen(port, () => {
  console.log(`running...............  http://localhost:${port}`)
})