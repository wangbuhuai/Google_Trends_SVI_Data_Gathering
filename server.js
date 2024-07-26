// Created by Dayu Wang (dwang@stchas.edu) on 2024-07-25

// Last updated by Dayu Wang (dwang@stchas.edu) on 2024-07-25


// Initial setup of the server
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const multer = require('multer');
const app = express();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, String.raw`input_files/`);
    },
    filename: (req, file, cb) => {
        cb(null, new Date(Date.now()).toISOString().replace(/[:.]/ig, '') + String.raw`_-_` + `${file.originalname}`);
    }
});
const upload = multer({ storage: storage });

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

const sviButtonText = {
    'before': 'Upload Input Information',
    'after': 'Input Uploaded'
};

app.get('/', (_, res) => {
    res.render('index', {
        getSviData: getSviData,
        errorMessages: errorMessages,
        sviButtonText: sviButtonText['before']
    });
});

app.post('/svi', upload.single('databaseFile'), (req, res) => {
    const apiKey = req.body.apiKey;
    const column = req.body.column;

    errorMessages['api-key'][0] = (getSviData['api-key'] = apiKey.trim()) === '';
    errorMessages['database-file'][0] = !req.hasOwnProperty('file');
    errorMessages['column'][0] = (getSviData['column'] = column.trim()) === '';

    if (errorMessages['api-key'][0] || errorMessages['database-file'][0] || errorMessages['column'][0]) {
        res.render('index', {
            getSviData: getSviData,
            errorMessages: errorMessages,
            sviButtonText: sviButtonText['before']
        });
    } else {
        res.render('index', {
            getSviData: getSviData,
            errorMessages: errorMessages,
            sviButtonText: sviButtonText['after']
        })
    }
});

app.listen(3000);
console.log('Server is running on http://localhost:3000');