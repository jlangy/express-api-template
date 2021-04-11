var express = require("express");
var router = express.Router();
const { getUserByLogin } = require('../db/request.js');

router.post("/login", async function (req, res) {
  const { username, password } = req.body;
  try {
    const {status, payload: user } = await getUserByLogin(username, password);
    res.status(status).json(user)
  } catch (err) {
    console.error(err);
    res.sendStatus(422);
  }
});

module.exports = router;
