const express = require('express')
const route = express.Router()
const projectModel = require('../data/helpers/projectModel.js')



// End points

// Get all projects
route.get('/', (req, res) => {
    projectModel.get()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json({message: `Something went wrong!: ${err}`})
    })
})

// Get specified project by params ID
route.get('/:id', (req, res) => {
    const {id} = req.params
    projectModel.get(id)
    .then(project => {
        res.status(200).json(project)
    })
    .catch(err => {
        res.status(500).json({message: `Something went wrong!: ${err}`})
    })
})

// Get actions associated with project.
route.get('/:id/actions', (req, res) => {
    projectModel.getProjectActions(req.params.id)
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(err => {
        res.status(500).json({message: `Something went wrong!: ${err}`})
    })
})

// Create a new project.
route.post('/', (req, res) => {
    const {name, description} = req.body
    if (!name || !description) {
        return res.status(400).json({error: 'Please include both a name and a description to add a new project.'})
    }
    projectModel.insert({name, description})
    .then(project => {
        res.status(200).json(`Success! New project titled ${project.name} added`)
    })
    .catch(err => {
        res.status(500).json({message: `Something went wrong!: ${err}`})
    })
})

// Delete existing project by specified params id
route.delete('/:id', (req, res) => {
    const {id} = req.params
    projectModel.remove(id)
    .then(count => {
        if(count < 1) {
           return res.status(404).json({error: 'Project with specified ID does not exist.'})
        }
        res.status(200).json({message: `Success! You deleted ${count} project(s).`})
    })
    .catch(err => {
        res.status(500).json({message: `Something went wrong!: ${err}`})
    })
})

// Update specified project by params id.
route.put('/:id', (req, res) => {
    const {id} = req.params
    const {name, description} = req.body
    if(!name || !description) {
        return res.status(400).json({message: 'You must include content in both the name and description fields to update a project.'})
    }
    projectModel.update(id, {name, description})
    .then(changes => {
        if (changes < 1) {
            return res.status(404).json({error: 'Project with specified ID does not exist.'})
        }
        const newObj = JSON.stringify(changes);
        res.status(200).json({message: `Success! You updated this project: See your changes: ${newObj}`})
    })
    .catch(err => {
        res.status(500).json({message: `Something went wrong!: ${err}`})
    })
})

module.exports = route;