// Created by Dayu Wang (dwang@stchas.edu) on 2024-07-25

// Last updated by Dayu Wang (dwang@stchas.edu) on 2024-07-25


// Initial setup of the server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Setup views and middleware.
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/style'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (_, res) => {
    res.render('index');
});

app.listen(3000);
console.log('Server is listening to port 3000');