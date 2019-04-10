const multer = require('multer')
const path = require('path')
const positionModel = require('../models/cookMessage')
    // const upload = multer({
    //     dest: path.resolve(__dirname, '../public/uploads/')
    // })
var filename = ''
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, path.resolve(__dirname, '../public/uploads/'))
    },
    filename: function(req, file, cb) {
        // 取文件原来的名字
        let originalname = file.originalname;
        // 取最后一个点出现的后缀
        let ext = originalname.substr(originalname.lastIndexOf('.'))

        // 把文件名改成域名+时间戳+后缀
        filename = file.fieldname + '-' + Date.now() + ext

        // 将文件名绑定在req.body对象上，目的在下一个中间件上可以拿到文件
        // 并且入库
        req.body.companyLogo = filename
        cb(null, filename)
    }
})

function fileFilter(req, file, cb) {

    // 这个函数应该调用 `cb` 用boolean值来
    // 指示是否应接受该文件
    if (/^image/.test(file.mimetype)) {
        // file.mimetype:image/jpeg,image/jpg,image/png,image/gif 只要是以image开头就是图片

        // 接受这个文件，使用`true`，像这样:
        cb(null, true)
    } else {
        // 拒绝这个文件，使用`false`，像这样:
        cb(null, false)
            // 如果有问题，你可以总是这样发送一个错误:
        cb(new Error('I don\'t have a clue!'))
    }
}
var upload = multer({ storage, fileFilter }).single('companyLogo')

const fileupload = (req, res, next) => {
    upload(req, res, async function(err) {
        if (err) {
            res.render('position', {
                ret: false,
                data: JSON.stringify({
                    msg: '图片上传失败'
                })
            })
        } else {
            if (!!filename) {
                next()
            } else {
                let result = await positionModel.addCook(req.body.id)
                req.body.companyLogo = result.companyLogo;
                next()
            }
            filename = ''
        }
    })
}
module.exports = {
    fileupload
}