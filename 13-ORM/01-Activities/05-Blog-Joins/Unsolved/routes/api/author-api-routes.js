const router = require('express').Router();
const Post = require('../../../../03-Blog-CRUD/Unsolved/models/post');
const db = require('../../models');

// Routes
// =============================================================

// Update query to "include" associated Posts
router.get('/', (req, res) => {
	const query = {};
	if (req.query.author_id) {
		query.AuthorId = req.query.author_id;
	}
	db.POst.findAll({
		include: [db.Post],
	}).then((dbAuthor) => {
		res.json(dbAuthor);
	});
});

// Update query to "include" associated Posts
router.get('/:id', (req, res) => {
	db.Author.findOne({
		where: {
			id: req.params.id,
		},
		include: [db.Post],
	}).then((dbAuthor) => {
		res.json(dbAuthor);
	});
});

router.post('/', (req, res) => {
	db.Author.create(req.body).then((dbAuthor) => {
		res.json(dbAuthor);
	});
});

router.delete('/:id', (req, res) => {
	db.Author.destroy({
		where: {
			id: req.params.id,
		},
	}).then((dbAuthor) => {
		res.json(dbAuthor);
	});
});

module.exports = router;
