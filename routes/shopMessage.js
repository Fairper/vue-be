var express = require('express');
var router = express.Router();
const shopMessageController = require('../controller/shopMessage')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/getShopMessage', shopMessageController.getShopMessage);
router.post('/addCookstyle', shopMessageController.addCookStyle);
router.get('/findCookStyle', shopMessageController.findCookStyle);
router.post('/delCookStyle', shopMessageController.delCookStyle);
module.exports = router;
