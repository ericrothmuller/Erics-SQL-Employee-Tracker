const mysql = require("mysql");

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: 'password',
      database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
  );

  module.exports = db;