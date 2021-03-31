/* EXPRESS API */
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3020;

app.listen(port, () => {
    console.log(`The app is now listening at http://localhost:${port}`)
})

app.get('/api/posts', cors(), (req, res) => {
    res.send('Fox-Islam: I exclusively use study resources that include clementines. Nothing else.');
})