const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { pool } = require("../DB/pgconn");
const logger = require("../utils/logger"); 


// REGISTER
const registerUser = async (req, res) => {

  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    logger.warn("Register attempt with missing fields");
    return res.status(400).json({ msg: "All fields are required" });
  }

  try {

    const hashedpassword = await bcrypt.hash(password, 10);

    const result = await pool.query(
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING *",
      [username, email, hashedpassword]
    );

    logger.info(`New user registered: ${email}`);

    res.json({
      msg: "User registered successfully",
      user: result.rows[0]
    });

  } catch (err) {

    logger.error(`Register error: ${err.message}`);

    res.status(500).json({ msg: "Server error" });
  }
};


// LOGIN
const loginUser = async (req, res) => {

  const { email, password } = req.body;

  if (!email || !password) {
    logger.warn("Login attempt without email/password");
    return res.status(400).json({ msg: "Email and password required" });
  }

  try {

    const user = await pool.query(
      "SELECT * FROM users WHERE email=$1",
      [email]
    );

    if (user.rows.length === 0) {
      logger.warn(`Login failed: user not found (${email})`);
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.rows[0].password);

    if (!isMatch) {
      logger.warn(`Login failed: wrong password (${email})`);
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.rows[0].id, email: user.rows[0].email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: false
    });

    logger.info(`User logged in: ${email}`);

    res.json({
      msg: "Login successful",
      user: {
        id: user.rows[0].id,
        username: user.rows[0].username,
        email: user.rows[0].email
      }
    });

  } catch (err) {

    logger.error(`Login error: ${err.message}`);

    res.status(500).json({ msg: "Server error" });
  }
};


// GET CURRENT USER
const getCurrentUser = (req, res) => {

  const token = req.cookies.token;

  if (!token) {
    logger.warn("GetCurrentUser: No token provided");
    return res.status(401).json({ msg: "Not logged in" });
  }

  try {

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    logger.info(`User session verified: ${decoded.email}`);

    res.json(decoded);

  } catch (err) {

    logger.error("Invalid token used");

    return res.status(401).json({ msg: "Invalid token" });
  }
};


// LOGOUT
const logoutUser = (req, res) => {

  res.clearCookie("token");

  logger.info("User logged out");

  res.json({ msg: "Logged out successfully" });
};


module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  getCurrentUser
};