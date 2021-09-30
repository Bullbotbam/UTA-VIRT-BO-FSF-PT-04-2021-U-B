const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

const { User } = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/userdb', {
	useFindAndModify: false,
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

mongoose.set('useCreateIndex', true);
mongoose.set('debug', true);

app.post('/submit', ({ body }, res) => {
	User.create(body)
		.then((dbUser) => {
			res.json(dbUser);
		})
		.catch((err) => {
			res.json(err);
		});
});
app.post('/submit', ({ body }, res) => {
	User.findOneAndDelete({ _id: params.id })
		.then((dbUserData) => {
			if (!dbUserData) {
				res.status(404).json({ message: 'No user found with this id!' });
				return;
			}
			res.json(dbUserData);
		})
		.catch((err) => res.status(400).json(err));
});

app.listen(PORT, () => {
	console.log(`App running on port ${PORT}!`);
});
