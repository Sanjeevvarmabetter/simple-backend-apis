const ToDoItem = require('../models/ToDoItem');



exports.createTodo = async (req,res) => {
	try {
		const newTodo = new ToDoItem(req.body);
		await newTodo.save();
		res.status(201).json(newTodo);
	} catch (err) {
		res.status(500).json({error: err.message});
	}
};


exports.getAllTodos = async (req,res) => {
	try {
		const todos = await ToDoItem.find();
		res.status(200).json(todos);

	 } catch(err) {
		console.log('Error fetching list');
	 }
};


exports.getTodoById = async (req,res) => {
	try {
		const todo = await ToDoItem.findById(req.params.id);

		if(!todo) {
			return res.status(404).json({error: 'That todo is not there buddy'});	
		}
   		res.status(200).json(todo);
	} catch(err) {
		console.log('Error fecting the tasks');
	}
	
};

exports.DeleteToDo = async (req,res) => {
	try {
		const todo = await ToDoItem.findByIdAndDelete(req.params.id);
		if(!todo) {
			console.log("it is not there  buddy");
		}
		res.status(200).json({messsage:'deleted todo'});
	}
	catch(err) {
		console.log("not there");
	}
};

