var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.send('get open resource');
});

module.exports = router;
