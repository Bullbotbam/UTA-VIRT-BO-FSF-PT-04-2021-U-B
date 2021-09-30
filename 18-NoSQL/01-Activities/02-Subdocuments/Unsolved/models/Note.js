const { Schema, model, Types } = require('mongoose');

const NoteSchema = new Schema({
	noteId: {
		type: Schema.Types.ObjectId,
		default: () => new Types.ObjectId(),
	},
	noteText: {
		type: String,
		required: true,
	},
});

module.exports = NoteSchema;
