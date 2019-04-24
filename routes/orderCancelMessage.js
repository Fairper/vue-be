var express = require('express');
var router = express.Router();
const orderCancelMessageController = require('../controller/orderCancelMessage')
const fileuploadMiddleware = require('../middlewares/fileupload')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/addCancelOrder', orderCancelMessageController.addCancelOrder);
router.get('/findCancelOrder', orderCancelMessageController.findCancelOrder);
router.post('/delCancelOrder', orderCancelMessageController.delCancelOrder);
module.exports = router;