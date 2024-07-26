// Created by Dayu Wang (dwang@stchas.edu) on 2024-07-25

// Last updated by Dayu Wang (dwang@stchas.edu) on 2024-07-25


// Initial setup of the server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Setup views and middleware.
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/static'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Global values
const errorMessages = {
    'api-key': [false, '[Error] A valid API key is required.'],
    'database-file': [false, '[Error] A valid database file is required.'],
    'column': [false, '[Error] A valid column is required.']
};

const getSviData = {
    'api-key': '',
    'column': ''
};

app.get('/', (_, res) => {
    res.render('index', {
        getSviData: getSviData,
        errorMessages: errorMessages
    });
});

app.post('/', (req, res) => {
    const apiKey = req.body.apiKey;
    const databaseFile = req.body.databaseFile;
    const column = req.body.column;

    errorMessages['api-key'][0] = (getSviData['api-key'] = apiKey.trim()) === '';
    errorMessages['database-file'][0] = databaseFile.trim() === '';
    errorMessages['column'][0] = (getSviData['column'] = column.trim()) === '';

    if (errorMessages['api-key'][0] || errorMessages['database-file'][0] || errorMessages['column'][0]) {
        res.render('index', {
            getSviData: getSviData,
            errorMessages: errorMessages
        });
    } else {
    }
});

app.listen(3000);
console.log('Server is running on http://localhost:3000');