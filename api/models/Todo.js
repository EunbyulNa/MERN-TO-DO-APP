const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
 name: String,
 completed:Boolean
})

module.exports = mongoose.model('Todo', TodoSchema);