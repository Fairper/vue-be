var express = require('express');
var router = express.Router();
const signController = require('../controller/user')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/sign', signController.signin);

module.exports = router;
