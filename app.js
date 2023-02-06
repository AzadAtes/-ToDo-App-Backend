require('dotenv').config()
const { connectDB } = require('./db/connect')
const express = require('express')
const tasks = require('./routes/tasks')
const { logger } = require('./middleware/logger')
const app = express()
const port = 4444



app.use(logger)
app.use(express.static('./static'));
app.use(express.json())
app.use('/api/v1/tasks', tasks)

const start = async () => {
    try {
        console.log('connecting to DB..');
        await connectDB(process.env.DATABASE_URL)
        console.log('success.');
        app.listen(port, ()=> console.log(`Server listening on Port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()