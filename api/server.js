const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Todo = require('./models/Todo');
const { todo } = require('node:test');

const port = 3001;
app.use(express.json());

const connectionString =  
'mongodb+srv://eun:1234@nodeexpress.cezylye.mongodb.net/toToApp?retryWrites=true&w=majority'

mongoose.connect(connectionString).then(()=> console.log('Connect to the DB..')).catch((err)=>console.log(err))


//routes 
app.get('/to-do-app', async(req,res)=> {
    const todos = await Todo.find();
    res.json(todos)
})

app.post('/to-do-app/new', async(req,res)=> {
    const task = await Todo.create(req.body)
    res.status(201).json({task})
})

app.delete('/to-do-app/delete/:id', async(req,res)=>{
    const result = await Todo.findByIdAndDelete(req.params.id)

    res.json(result)
})

app.listen(port, console.log(`server is running on port ${port}`))
