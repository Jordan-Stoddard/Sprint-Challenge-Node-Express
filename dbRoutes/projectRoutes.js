const express = require('express')
const route = express.Router()
const projectModel = require('../data/helpers/projectModel.js')




// End points
route.get('/', (req, res) => {
    projectModel.get()
    .then(projects => {
        res.status(200).json(projects)
    })
})

module.exports = route;