const { pool } = require("../DB/pgconn");
const logger = require("../utils/logger");


// GET ALL USERS
const fetchusers = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");

    logger.info("Admin fetched all users");

    res.status(200).json({
      success: true,
      users: result.rows,
    });

  } catch (err) {
    logger.error(err.message);
    res.status(500).json({
      success: false,
      message: "Failed to fetch users",
    });
  }
};


// DELETE USER
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    logger.info(`Admin deleted user with id ${id}`);

    res.status(200).json({
      success: true,
      message: "User deleted successfully",
      user: result.rows[0],
    });

  } catch (err) {
    logger.error(err.message);
    res.status(500).json({
      success: false,
      message: "Failed to delete user",
    });
  }
};


module.exports = {
  fetchusers,
  deleteUser,
};