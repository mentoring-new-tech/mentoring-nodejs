const routes = require('express').Router();
const workers = require('./workers');

 routes.use('/workers', workers);

 module.exports = routes; 