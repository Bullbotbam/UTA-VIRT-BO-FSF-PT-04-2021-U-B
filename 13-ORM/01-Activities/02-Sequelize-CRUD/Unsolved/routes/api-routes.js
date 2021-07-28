// Dependencies
// =============================================================
const router = require('express').Router();
const Todo = require('../models/todo');

// Routes
// =============================================================

// GET route for getting all of the todos
router.get('/api/todos', (req, res) => {
	Todo.findAll({})
		.then((dbTodo) => res.json(dbTodo))
		.catch((err) => res.json(err));
});

// POST route for saving a new todo
router.post('/api/todos', (req, res) => {
	Todo.create(req.body)
		.then((dbTodo) => res.json(dbTodo))
		.catch((err) => res.json(err));
});

// DELETE route for deleting a todo
router.delete('/api/todos/:id', (req, res) => {
	Todo.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((dbTodo) => {
			if (!dbTodo) {
				res.status(404).json({ message: 'No user found with this id' });
				return;
			}
			res.json(dbTodo);
		})
		.then((doTodo) => res.json(dbTodo))
		.catch((err) => res.json(err));
});

// PUT route for updating a todo
router.put('/api/todos/:id', (req, res) => {
	Todo.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
		.then((dbTodo) => {
			if (!dbTodo[0]) {
				res.status(404).json({ message: 'No user found with this id' });
				return;
			}
			res.json(dbTodo);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
