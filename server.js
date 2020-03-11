const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db')
const router = require('./network/routes');

db('mongodb+srv://db_user_telegram:madrid321431462@cluster0-rszgv.mongodb.net/test?retryWrites=true&w=majority')

let app = express();

app.use(bodyParser.json());
// app.use(router);

router(app);

app.use('/app', express.static('public'));

app.listen(3000);
console.log('la app esta escuchando en localhosto:3000');