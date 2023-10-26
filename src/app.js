const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors')

const sample = require('./routes/sample')

// Constants
const PORT = process.env.PORT || 1234
const corsOptions = {
  origin: 'http://localhost:8081'
}
// const uri = 'mongodb+srv://windersegura:OEWiXesxhRFqsWMu@try-cluster.o7ru4z1.mongodb.net/?retryWrites=true&w=majority'

const app = express()

// Middlewares
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Rutes
app.use('/api/sample', sample)
app.use((req, res) => {
  res.end('<h1>404 Not Found</h1>')
})

app.listen(PORT, () => {
  console.log(`Listen on http://localhost:${PORT}`)
})
