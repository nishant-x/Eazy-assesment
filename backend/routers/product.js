const express = require("express");
const router = express.Router();
const authuser = require('../middlewares/authmiddleware')
const { fetchproduct } = require('../controllers/productcontrollers')


router.get("/",  authuser , fetchproduct )


module.exports = router;