const express = require('express')
const r = require('./routes')
const app = express()
const port = 5002
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(r)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})