var express = require('express');
var router = express.Router();
const shopMessageController = require('../controller/shopMessage')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/updateShopMessage', shopMessageController.updateShopMessage);
router.post('/addCookstyle', shopMessageController.addCookStyle);
router.post('/addShop', shopMessageController.addShop);
router.get('/findCookStyle', shopMessageController.findCookStyle);
router.post('/delCookStyle', shopMessageController.delCookStyle);
router.post('/editCookStyle', shopMessageController.editCookStyle);
module.exports = router;
