const express = require('express')
const router = express.Router()
const Task = require('../models/task')

router.route('/')
    .get(async (req,res) => {
        try {
            const tasks = await Task.find({})
            res.status(200).json({ tasks })
        } catch (error) {
            res.status(500).json({msg: error})
        }
    })
    .post(async (req,res) => {
        try {
            const task = await Task.create(req.body)
            res.status(201).json({ task })
        } catch (error) {
            res.status(500).json({msg: error})
        }
        console.log(req.body)
    })

router.route('/:id')
    .get(async (req,res) => {
        try {
            const { id: taskID } = req.params
            const task = await Task.findOne({_id: taskID})
            if (!task) {
                return res.status(404).json({ msg: `Found no task with id: ${taskID}` })
            }
            res.status(201).json({ task })
        } catch (error) {
            res.status(500).json({msg: error})
        }
    })
    .patch(async (req,res) => {
        try {
            const { id: taskID } = req.params
            const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
                new: true,
                runValidators: true
            })
            if (!task) {
                return res.status(404).json({ msg: `Found no task with id: ${taskID}` })
            }
            res.status(201).json(task)
        } catch (error) {
            res.status(500).json({msg: error})
        }
        console.log(req.body)
    })
    .delete(async (req,res) => {
        try {
            const { id: taskID } = req.params
            const task = await Task.findOneAndDelete({_id: taskID})
            if (!task) {
                return res.status(404).json({ msg: `Found no task with id: ${taskID}` })
            }
            res.status(201).send()
        } catch (error) {
            res.status(500).json({msg: error})
        }
    })

module.exports = router 