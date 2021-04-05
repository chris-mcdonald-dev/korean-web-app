const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studyResourceSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	author: {
		type: String,
		required: true,
	},
}, { timestamps: true });

const StudyResource = mongoose.model('StudyResource', studyResourceSchema);

module.exports = StudyResource;