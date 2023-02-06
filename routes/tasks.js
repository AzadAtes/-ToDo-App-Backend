const express = require('express')
const router = express.Router()

const { getTasks, createTask, getTask, updateTask, deleteTask } = require('../controllers/tasks')

router.route('/')
    .get((req,res) => {
        getTasks(req,res)
    })
    .post((req,res) => {
        createTask(req,res)
    })

router.route('/:id')
    .get((req,res) => {
        getTask(req,res)
    })
    .patch((req,res) => {
        updateTask(req,res)
    })
    .delete((req,res) => {
        deleteTask(req,res)
    })

module.exports = router