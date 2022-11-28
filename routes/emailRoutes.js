const express = require('express');
const api = express.Router();
const emailController = require('../controllers/emailController');

api.post('/email', emailController)

module.exports = api