const express = require('express')
const restful = require('node-restful')
const bodyParser = require('body-parser')
const cors = require('cors')

const routes = require('./src/routes/index')

const app = express()

const mongoose = restful.mongoose

// configurando mongo

mongoose.Promise = global.Promise
//mongoose.connect('mongodb://db/mydb')

mongoose.connect('mongodb://db/mydb', { useMongoClient: true })

// rotas
app.use(routes)

// middlewares
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

// odm

const Client = restful.model('Client', {
  name: { type: String, required: true }
})

// Rest api
Client.methods(['get', 'post', 'put', 'delete'])

Client.register(app, '/clients')

app.listen(3000, () => 'running...')
