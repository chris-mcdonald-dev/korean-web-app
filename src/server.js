/* EXPRESS API */
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3020;

app.listen(port, () => {
    console.log(`The app is now listening at http://localhost:${port}`)
})

app.get('/api/posts', cors(), (req, res) => {
    res.json(testData);
})

testData = {
    "Fox-Islam": "I exclusively use study resources that include clementines. Nothing else.",
    "Will": "Give me a juicebox full of mayonnaise, and I promise you I'm set.",
    "Alia": "I don't shake fingers anymore because of Covid, sorry.",
}