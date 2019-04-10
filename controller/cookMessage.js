const cookMessageModel = require('../models/cookMessage')
// 添加一个菜系
const addCook = async(req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8')
    let result = await (cookMessageModel.addCook({
            ...req.body,
        }))
    console.log('resultControllllll', req.body)
        // 这是给前端的反馈信息(是否保存成功)
    if (!!result) {
        res.render('cookMessage', {
            ret: true,
            data: JSON.stringify({
                msg: '菜品添加成功'
            })
        })
    } else {
        res.render('cookMessage', {
            ret: false,
            data: JSON.stringify({
                msg: '菜品添加失败'
            })
        })
    }
}
// 找到一个菜系
const findCook = async(req, res, next) => {
    // res.header('Content-Type', 'application/json; charset=utf-8')
    let data = await (cookMessageModel.findCook())
        // 这是给前端的反馈信息(是否保存成功)
    if (!!data) {
        res.send(data)
    } else {
        res.render('shopMessage', {
            ret: false,
            data: JSON.stringify({
                msg: '菜品查找失败'
            })
        })
    }
}
// 删除一个菜品
const delCook = async(req, res, next) => {
    // res.header('Content-Type', 'application/json; charset=utf-8')
    let data = await (cookMessageModel.delCook(req.body))
        // 这是给前端的反馈信息(是否保存成功)
    if (!!data) {
        res.render('shopMessage', {
            ret: true,
            data: JSON.stringify({
                msg: '菜品删除成功'
            })
        })
    } else {
        res.render('shopMessage', {
            ret: false,
            data: JSON.stringify({
                msg: '菜品删除失败'
            })
        })
    }
}
const editCook = async(req, res, next) => {
    // res.header('Content-Type', 'application/json; charset=utf-8')
    let data = await (cookMessageModel.editCook(req.body))
        // 这是给前端的反馈信息(是否保存成功)
    if (!!data) {
        res.render('shopMessage', {
            ret: true,
            data: JSON.stringify({
                msg: '菜品修改成功'
            })
        })
    } else {
        res.render('shopMessage', {
            ret: false,
            data: JSON.stringify({
                msg: '菜品修改失败'
            })
        })
    }
}
module.exports = {
    addCook,
    findCook,
    delCook,
    editCook
}