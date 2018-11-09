// Imports
const express = require('express')
const configureMiddleware = require('./middleware/configureMiddleware.js')
const projectRoutes = require('./dbRoutes/projectRoutes.js')
const actionRoutes = require('./dbRoutes/actionRoutes.js')

// Initialize Server
const server = express()

// Call Middleware
configureMiddleware(server)

//Project Endpoints
server.use('/projects', projectRoutes)
//Action Endpoints
server.use('/actions', actionRoutes)

module.exports = server;