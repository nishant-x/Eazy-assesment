const jwt = require("jsonwebtoken");

const authuser = (req, res, next) => {

  const token = req.cookies.token;  

  if (!token) {
    return res.status(401).json({ msg: "Access denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // verify token
    req.user = decoded;   
    next();               
  } catch (err) {
    return res.status(401).json({ msg: "Invalid token" });
  }
};

module.exports = authuser;