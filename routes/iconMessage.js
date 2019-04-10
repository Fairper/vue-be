var express = require('express');
var router = express.Router();
const iconMessageController = require('../controller/iconMessage')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/updateIcon', iconMessageController.updateIcon);
router.post('/addIcon', iconMessageController.addIcon);
router.get('/findIcon', iconMessageController.findIcon);
router.post('/delIcon', iconMessageController.delIcon);
router.post('/editIcon', iconMessageController.editIcon);
module.exports = router;