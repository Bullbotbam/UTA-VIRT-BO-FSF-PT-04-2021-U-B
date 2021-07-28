// Dependencies
// =============================================================
const router = require('express').Router();
const { Op } = require('sequelize');
const Book = require('../models/book');

// Routes
// =============================================================

// Get all books
router.get('/books', (req, res) => {
	Book.findAll()
		.then((dbBooks) => res.json(dbBooks))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// Get all books of a specific genre
router.get('/genres/:genre', (req, res) => {
	Book.findAll({
		where: {
			genre: req.body.genre,
		},
	}).then((response) => {
		res.json(response).catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
	});
});

// Get all books from a specific author
router.get('/authors/:author', (req, res) => {
	Book.findAll({
		where: {
			authors: req.patams.author,
		},
	});
});

// Get all "long" books (books 150 pages or more)
router.get('/books/length/long', (req, res) => {
	Book.findAll({
		where: {
			pages: {
				[Op.gte]: 350,
			},
		},
	});
});

// Get all "short" books (books 150 pages or less)
router.get('/books/length/short', (req, res) => {
	Book.findAll({
		where: {
			pages: {
				[Op.lt]: 350,
			},
		},
	});
});

module.exports = router;
