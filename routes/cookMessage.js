var express = require('express');
var router = express.Router();
const cookMessageController = require('../controller/cookMessage')
const fileuploadMiddleware = require('../middlewares/fileupload')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/addCook', fileuploadMiddleware.fileupload, cookMessageController.addCook);
router.get('/findCook', cookMessageController.findCook);
router.post('/findOneShop', cookMessageController.findOneShop);
router.post('/delCook', cookMessageController.delCook);
router.post('/editCook', fileuploadMiddleware.fileupload, cookMessageController.editCook);
module.exports = router;
