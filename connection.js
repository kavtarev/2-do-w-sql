const sql = require('mysql2')

const connection = sql.createConnection({
  database: process.env.DATABASE,
  password: process.env.PASS,
  user: process.env.USER,
})
module.exports = connection
