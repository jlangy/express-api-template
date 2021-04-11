const db = require("./");
const jwt = require("jsonwebtoken");

const getUserByLogin = (name, password) => {
  const sql = "select * from user where name=? and password=?";
  const params = [name, jwt.sign(password, process.env.JWT_SECRET)];

  return new Promise((resolve, reject) => {
    db.get(sql, params, (err, row) => {
      if (err) reject({ code: 401 });
      const accessToken = jwt.sign(
        { username: row.name },
        process.env.JWT_SECRET
      );
      resolve({ status: 200, payload: accessToken });
    });
  });
};

module.exports = {
  getUserByLogin,
};
