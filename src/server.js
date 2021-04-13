const dotenv = require("dotenv").config();
const gSheets = require("./connections/gSheetsConn");

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
	gSheets.getVocab("'Weekly Vocab'!A:B")
		.then((weeklyVocab) => {
			res.json(weeklyVocab)
		})
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
		{"korean": "봄", "english": "Spring"},
		{"korean": "반팔", "english": "Shortsleeves"},
		{"korean": "갈아입다", "english": "To change clothes"},
		{"korean": "꽃이 피다", "english": "To bloom (flowers)"},
		{"korean": "바람이 불다", "english": "To blow (wind)"},
		{"korean": "꽃가루", "english": "Pollen"},
		{"korean": "재채기하다", "english": "To sneeze"},
		{"korean": "재채기를 참다", "english": "To hold back a sneeze"},
		{"korean": "쉬다", "english": "To rest"},
		{"korean": "나비", "english": "Butterfly"},
		{"korean": "토끼", "english": "Bunny"},
		{"korean": "벚꽃", "english": "Cherry blossom flowers"}
]
/******************************/