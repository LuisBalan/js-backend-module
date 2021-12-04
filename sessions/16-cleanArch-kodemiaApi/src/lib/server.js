const express = require('express');
const koder = require('../routers/koder.router')
const logger = require('../middlewares/logger');

const server = express();

// Middlewares
server.use(express.json());
server.use(logger);


server.use('/koders', koder);

module.exports = server;