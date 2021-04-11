const sqlite3 = require("sqlite3").verbose();
const jwt = require("jsonwebtoken");

const DBSOURCE = "db.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
  if (err) {
    // Cannot open database
    console.error(err.message);
    throw err;
  } else {
    console.log("Connected to the SQLite database.");
    db.run(
      `CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            password text
            )`,
      (err) => {
        if (err) {
          console.log("DB already initialized");
        } else {
          // Table just created, creating some rows
          var insert = "INSERT INTO user (name, password) VALUES (?,?)";
          db.run(insert, ["admin", jwt.sign("admin", process.env.JWT_SECRET)]);
        }
      }
    );
  }
});

module.exports = db;
