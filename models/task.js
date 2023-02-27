const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
    },
    complete: {
        type: Boolean,
        default: false
    },
    myDay: {
        type: Boolean,
        default: false
    },
    important: {
        type: Boolean,
        default: false
    },
    planned: {
        type: Boolean,
        default: false
    },
    fullDate: {
        type: Object,
        default: null
    },
    date:{
        type: Object,
        default: null   
    }
})

module.exports = mongoose.model('Task', TaskSchema)