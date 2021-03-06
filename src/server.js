const eHandler = require("./utilities/error-handlers");
const dotenv = require("dotenv").config();

let gSheets;
try {
	gSheets = require("./connections/gSheetsConn");
} catch (error) {
	console.log(error.message, eHandler.getSheetsNotFoundMsg());
}

/******************************/
/******** Express Setup *******/
/******************************/
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT;
const cors = require("cors");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
/******************************/


/******************************/
/***** MongoDB Connection *****/
/******************************/
const dbURI = process.env.DB_CONN;
const mongoose = require("mongoose");

mongoose
	.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
	.then((result) => {
		console.log("I've successfully connected to the database. :)");
		app.listen(port, () => {
			console.log(`Listening on http://localhost:${port}`);
		});
	})
	.catch((error) => {
		console.log("There was an error connecting to the database:\n", error);
	});
/******************************/


/******************************/
/*********** Routes ***********/
/******************************/
const studyResources = require("./routes/studyResources");

app.use('/api/study-resources', studyResources);

app.get("/api/posts", cors(), (req, res) => {
	res.json(testData);
});
app.get("/api/vocab", cors(), (req, res) => {
	try {
		gSheets.getVocab("'Weekly Vocab'!A:B")
			.then((weeklyVocab) => {
				res.json(weeklyVocab)
			})
	} catch (error) {
		console.log(error.message, eHandler.getSheetsNotFoundMsg());
	}
});


testData = [
	{
		"author" : "Fox-Islam",
		"content": "I exclusively use study resources that include clementines. Nothing else."
	},
	{
		"author" : "Will",
		"content": "Give me a juicebox full of mayonnaise, and I promise you I'm set."
	},
	{
		"author" : "Alia",
		"content": "I don't shake fingers anymore because of Covid, period."
	},
];

testVocab = [
		{"korean": "???", "english": "Spring"},
		{"korean": "??????", "english": "Shortsleeves"},
		{"korean": "????????????", "english": "To change clothes"},
		{"korean": "?????? ??????", "english": "To bloom (flowers)"},
		{"korean": "????????? ??????", "english": "To blow (wind)"},
		{"korean": "?????????", "english": "Pollen"},
		{"korean": "???????????????", "english": "To sneeze"},
		{"korean": "???????????? ??????", "english": "To hold back a sneeze"},
		{"korean": "??????", "english": "To rest"},
		{"korean": "??????", "english": "Butterfly"},
		{"korean": "??????", "english": "Bunny"},
		{"korean": "??????", "english": "Cherry blossom flowers"}
]
/******************************/