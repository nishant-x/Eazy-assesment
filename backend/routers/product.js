const express = require("express");
const router = express.Router();
const authuser = require('../middlewares/authmiddleware')
const { fetchproduct } = require('../controllers/productcontrollers')


router.post("/",  authuser , fetchproduct )


module.exports = router;