
var express = require('express');
var router = express.Router();

var Project = require('../models/Project');

// GET all projects
router.get('/', (req, res) => {
  Project.find()
    .then(projects => res.json(projects))
    .catch(err => res.status(500).json(err));
});

// CREATE new project
router.post('/', (req, res) => {
  Project.create(req.body)
    .then(project => res.status(201).json(project))
    .catch(err => res.status(500).json(err));
});

// UPDATE project
router.put('/:id', (req, res) => {
  Project.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(project => res.json(project))
    .catch(err => res.status(500).json(err));
});

// DELETE project
router.delete('/:id', (req, res) => {
  Project.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: "Deleted" }))
    .catch(err => res.status(500).json(err));
});

module.exports = router;
