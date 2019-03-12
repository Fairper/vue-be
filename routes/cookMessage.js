var express = require('express');
var router = express.Router();
const cookMessageController = require('../controller/cookMessage')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/addCook', cookMessageController.addCook);
router.get('/findCook', cookMessageController.findCook);
router.post('/delCook', cookMessageController.delCook);
router.post('/editCook', cookMessageController.editCook);
module.exports = router;
