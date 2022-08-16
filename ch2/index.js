//  Setup Bable  with Express JS

import express from 'express'
// const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Express ch2 !! Welcome your friend ankit mishra!')
})

app.listen(port, () => {
  console.log(`running..............ch2  http://localhost:${port}`)
})
