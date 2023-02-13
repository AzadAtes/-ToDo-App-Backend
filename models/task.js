const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    task: {
        type: String,
        required: [true, 'must provide a name'],
        trim: true,
        maxlength: [20, 'name cannot be more than 20 characters']
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
    }
})

module.exports = mongoose.model('Task', TaskSchema)