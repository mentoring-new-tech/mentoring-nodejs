const workers = require('express').Router();

const createWorkers = require('./createWorkers');
const getWorkers = require('./getWorkers');
const getWorkersById = require('./getWorkersById');
const updateWorkers = require('./updateWorkers');
const removeWorkers = require('./removeWorkers');

workers.get('/', getWorkers);
workers.get('/:id', getWorkersById);
workers.post('/', createWorkers);
workers.put('/:id', updateWorkers);
workers.delete('/:id', removeWorkers);

module.exports = workers;