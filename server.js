require('dotenv').config();
const express = require('express');
const morgan = require('morgan');

const api = require('./api');

const app = express();

app.use(morgan('dev'));

app.use('/api', api);

app.get('*', (req, res) => {
    return res.status(404).json({message: 'Not found'})
})

app.listen(process.env.PORT, () => {
    console.log(`App listening at ${process.env.PORT}`)
})
