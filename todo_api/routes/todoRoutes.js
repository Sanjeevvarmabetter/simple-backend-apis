const express = require('express');

const router = express.Router();


const  {
	createTodo,
	getAllTods,
	getTodoById,
	DeleteToDo,
} = require('../controllers/todoController');


router.post('/todos',createTodo);
router.get('/todos',getAllTods);
router.get('/todos/:id',getTodoById);
router.delete('/todos/:id',DeleteToDo);


module.exports = router;
