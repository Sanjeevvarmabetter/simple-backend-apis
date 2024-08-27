const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	content: {
		type: String,
		default:'',
	},
	versions: [{
		content: String,
		timestamp: Date
	}],
});

module.exports = mongoose.model('Document',documentSchema);



