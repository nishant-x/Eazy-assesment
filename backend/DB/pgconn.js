const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  host: 'db.geigaidqjzwafwdxunpk.supabase.co',
  port: 5432,
  // Force IPv4
  family: 4
});

pool.connect()
  .then(() => console.log("Database Connected ✅"))
  .catch((err) => console.error("Database Connection Error ❌", err));

module.exports = {
    pool
};