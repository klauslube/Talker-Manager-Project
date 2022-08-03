const express = require('express');

const login = express.Router();

const validateEmail = require('../middlewares/validateEmail');
const validatePassword = require('../middlewares/validatePassword');
const getToken = require('../helper/getToken');

login.post('/', validateEmail, validatePassword, getToken);

module.exports = login;