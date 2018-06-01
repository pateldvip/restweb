const express = require('express');
const app = express();
const port = process.env.port || 3000;
const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/bookAPI');
const Book = require('./models/bookModel');
const bookRouter = express.Router();
bookRouter.route('/Books')
    .get(function (req, res) {
        Book.find(function (err, books) {
            if (err)
                console.log(err);   

            else
                res.json(books);

        });
    });
app.use('/api', bookRouter);
app.listen(port, function () {
    console.log("the server is running on port " + port);
});
app.get('/', function (req, res) {
    res.send('this is a test page');
});