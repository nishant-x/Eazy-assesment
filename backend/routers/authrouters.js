const express = require("express");

const {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser
} = require("../controllers/authControllers");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", getCurrentUser);
router.post("/logout", logoutUser);

module.exports = router;