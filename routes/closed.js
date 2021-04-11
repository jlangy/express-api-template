var express = require('express');
var router = express.Router();
const authenticated = require('../utils');

router.use(authenticated);

router.get('/', (req, res) => {
  res.send('get authenticated resource');
});

module.exports = router;
