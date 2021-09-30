const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

const { Notebook } = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/notebookdb', {
	useFindAndModify: false,
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

mongoose.set('useCreateIndex', true);
mongoose.set('debug', true);

// Create a new notebook
app.post('/api/notebooks', ({ body }, res) => {
	Notebook.create(body)
		.then((dbNotebookData) => {
			res.json(dbNotebookData);
		})
		.catch((err) => {
			res.json(err);
		});
});

// Retrieve all notebooks
app.get('/api/notebooks', (req, res) => {
	Notebook.find()
		.then((dbNotebookData) => {
			res.json(dbNotebookData);
		})
		.catch((err) => {
			res.json(err);
		});
});

// Create a new note for a notebook
app.post('/api/notebooks/:notebookId/notes', (req, res) => {
	// Using the 'notebookId' in the params, find the notebook from the collection
	// Add the 'req.body' to the 'notes' subdocument array in the notebook
	//
	// YOUR CODE HERE
	//
	Notebook.findOneAndUpdate(
		{ _id: params.noteId },
		{ $push: { notes: req.body } },
		{ new: true }
	).then(dbNotebookData);
});

// Delete a note from a notebook
app.delete('/api/notebooks/:notebookId/notes/:noteId', ({ params }, res) => {
	// Using the 'notebookId' and 'noteId' in the params, find the notebook that contains the note
	// Remove the note from the 'notes' subdocument array in the notebook
	//
	// YOUR CODE HERE
	//
	Notebook.findByIdAndDelete(
		{ _id: params.noteId },
		{ $pull: { notes: { noteId: params.noteId } } },
		{ new: true }
	)
		.then((dbNoteData) => {
			if (!dbNoteData) {
				res.status(404).json({ message: 'No note found with this id!' });
				return;
			}
			res.json(dbNoteData);
		})
		.catch((err) => res.json(err));
}),
	app.listen(PORT, () => {
		console.log(`App running on port ${PORT}!`);
	});
