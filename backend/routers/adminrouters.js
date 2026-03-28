const express = require('express');
const router = express.Router();
const { fetchusers } = require('../controllers/adminControllers')


router.get('/users' , fetchusers);


module.exports = router
