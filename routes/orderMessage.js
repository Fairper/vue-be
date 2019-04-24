var express = require('express');
var router = express.Router();
const orderMessageController = require('../controller/orderMessage')
const fileuploadMiddleware = require('../middlewares/fileupload')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/addSuccessOrder', orderMessageController.addSuccessOrder);
router.get('/findSuccessOrder', orderMessageController.findSuccessOrder);
router.post('/delSuccessOrder', orderMessageController.delSuccessOrder);
module.exports = router;