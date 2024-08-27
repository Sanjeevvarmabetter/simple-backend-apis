const mongoose = require('mongoose');

const ToDoSchema = new mongoose.Schema({
	title: {
		type:String,
		required: true,
	},
	description: {
		type: String,
	},
	status: {
		type: String,
		enum: ['pending','completed'],
		default: 'pending',
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
	
});

module.exports = mongoose.model('ToDoItem',ToDoSchema);


