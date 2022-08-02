const express = require('express');

const login = express.Router();

const validateEmail = require('../helper/validateEmail');
const validatePassword = require('../helper/validatePassword');
const getToken = require('../helper/getToken');

login.post('/', validateEmail, validatePassword, getToken);

module.exports = login;