const express = require('express');
const router = express.Router();
const StudyResource = require("../models/studyResource");

router.post("/add", (req, res) => {
    const studyResource = new StudyResource({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author,
    });

    studyResource.save()
        .then(result => {
            res.send(result);
        })
        .catch(error => {
            console.log("\nThere was an error writing the study resource to the database.\nRequest:", req.body, "\n", error.message);
            res.status(400);
            res.send("Please make sure your request contains a title, content, and author in the body.");
        });
});

router.get("/", (req, res) => {
    StudyResource.find()
        .then(result => {
            res.send(result)
        })
        .catch(error => console.log("There was an error sending the studyResource response:\n", error));
})

module.exports = router;