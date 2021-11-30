const express = require('express');
const mongoose = require('mongoose');
const PORT = 8080;

const DB_USER = 'luis';
const DB_PASSWORD = 'bln1.618';
const DB_HOST = 'cluster0.jtdjp.mongodb.net';
const DB_NAME = 'kodemia';

const URL = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

const Koder = require('./koder.model');

const app = express();