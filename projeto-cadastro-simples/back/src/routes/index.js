const routes = require('express').Router()

const controllers = require('../controllers/index')

routes.get('/', controllers.getInicial)

module.exports = routes
