// Dependencies
// =============================================================
const router = require('express').Router();
const Post = require('../models/post');

// Routes
// =============================================================

// GET route for getting all of the posts
router.get('/api/posts/', (req, res) => {
	Post.findAll({
		attributes: ['title', 'body', 'category'],
	}).then((dbPost) => {
		res.json(dbPost);
	});
});

// GET route for retrieving posts of a specific category
router.get('/api/posts/category/:category', (req, res) => {
	// Retrieve all of the posts of a specific category
	// Return the posts as JSON
	//
	// YOUR CODE HERE
	//
	Post.findAll({
		where: {
			category: req.params.category,
		},
	})
		.then((dbPost) => {
			if (!dbPost) {
				res.status(404).json({ message: 'No post found with this id' });
				return;
			}
			res.json(dbPost);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// GET route for retrieving a single post
// We can get the id of the post from 'req.params.id'
router.get('/api/posts/:id', (req, res) => {
	// Retrieve a single post using the id from 'req.params.id'
	// Return the post as JSON
	//
	// YOUR CODE HERE
	//
	Post.findOne({
		where: {
			id: req.params.id,
		},
		attributes: ['title', 'body', 'category'],
	})
		.then((dbPost) => {
			if (!dbPost) {
				res.status(404).json({ message: 'No post found with this id' });
				return;
			}
			res.json(dbPost);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// POST route for saving a new post
router.post('/api/posts', (req, res) => {
	// Create a new post with the data in 'req.body'
	// Return the new post as JSON
	//
	// YOUR CODE HERE
	console.log(req.body);
	Post.create(req.body)
		.then((dbPost) => res.json(dbPost))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// DELETE route for deleting a post
router.delete('/api/posts/:id', (req, res) => {
	// Delete a post using the id from 'req.params.id'
	// Return the result as JSON
	//
	// YOUR CODE HERE
	//
	Post.destroy({
		where: {
			id: req.params.id,
		},
	})
		.then((dbPost) => {
			if (!dbPost) {
				res.status(404).json({ message: 'No post found with this id' });
				return;
			}
			res.json(dbPost);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// PUT route for updating a post
router.put('/api/posts/:id', (req, res) => {
	// Update a post with the data in 'req.body'
	// Return the result as JSON
	//
	// YOUR CODE HERE
	//
	Post.update(
		{
			title: req.body.title,
			body: req.body.body,
			category: req.body.category,
		},
		{
			where: {
				id: req.params.id,
			},
		}
	)
		.then((dbPost) => {
			if (!dbPost) {
				res.status(404).json({ message: 'No post found with this id' });
				return;
			}
			res.json(dbPost);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
