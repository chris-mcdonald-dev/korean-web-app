const dotenv = require("dotenv").config();

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

testData = {
	"Fox-Islam": "I exclusively use study resources that include clementines. Nothing else.",
	Will: "Give me a juicebox full of mayonnaise, and I promise you I'm set.",
	Alia: "I don't shake fingers anymore because of Covid, sorry.",
};
/******************************/