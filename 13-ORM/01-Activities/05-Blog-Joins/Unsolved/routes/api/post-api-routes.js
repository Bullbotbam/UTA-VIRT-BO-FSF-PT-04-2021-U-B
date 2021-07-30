const router = require('express').Router();
const Post = require('../../../../03-Blog-CRUD/Unsolved/models/post');
const { Author } = require('../../../../04-Blog-Association/Unsolved/models');
const db = require('../../models');

// Routes
// =============================================================

// Update query to "include" associated Author
router.get('/', (req, res) => {
	// db.Post.findOne({
	// 	where: {
	// 		id: req.body.id,
	// 	},

	// });
	const query = {
		includes: [
			{
				model: Author,
				attributes: ['name'],
			},
		],
	};
	if (req.query.author_id) {
		query.AuthorId = req.query.author_id;
	}

	db.Post.findAll({
		where: query,
	}).then((dbPost) => {
		res.json(dbPost);
	});
});

// Update query to "include" associated Author
router.get('/:id', (req, res) => {
	db.Post.findOne({
		where: {
			id: req.params.id,
		},
		includes: [
			{
				model: Author,
				attributes: ['name'],
			},
		],
	}).then((dbPost) => {
		res.json(dbPost);
	});
});

router.post('/', (req, res) => {
	console.log(req.body);
	db.Post.create(req.body).then((dbPost) => {
		res.json(dbPost);
	});
});

router.delete('/:id', (req, res) => {
	db.Post.destroy({
		where: {
			id: req.params.id,
		},
	}).then((dbPost) => {
		res.json(dbPost);
	});
});

router.put('/', (req, res) => {
	db.Post.update(req.body, {
		where: {
			id: req.body.id,
		},
	}).then((dbPost) => {
		res.json(dbPost);
	});
});

module.exports = router;
