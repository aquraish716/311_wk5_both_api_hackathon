const express = require('express');

const app = express();

const port = process.env.PORT || 4001;

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send("Welcome to our API");
})


app.listen(port, () => {
    console.log('app is listening on:', port)
});