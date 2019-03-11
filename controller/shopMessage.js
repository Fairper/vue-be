const shopMessageModel = require('../models/shopMessage')
const getShopMessage =async (req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8')
    let userId = req.body.userId
    let result = await shopMessageModel.findShopMessage()
    console.log(result)
} 
// 保存数据
const addCookStyle = async(req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8')
    let result = await (shopMessageModel.addCookStyle({
            ...req.body,
        }))
        // 这是给前端的反馈信息(是否保存成功)
    if (!!result) {
        res.render('shopMessage', {
            ret: true,
            data: JSON.stringify({
                msg: '数据保存成功'
            })
        })
    } else {
        res.render('shopMessage', {
            ret: false,
            data: JSON.stringify({
                msg: '数据保存失败'
            })
        })
    }
}
const findCookStyle = async(req, res, next) => {
    // res.header('Content-Type', 'application/json; charset=utf-8')
    let data = await (shopMessageModel.findCookStyle())
        // 这是给前端的反馈信息(是否保存成功)
    if (!!data) {
        res.send(data)
    } else {
        res.render('shopMessage', {
            ret: false,
            data: JSON.stringify({
                msg: '数据查找失败'
            })
        })
    }
}
// 删除一个菜系
const delCookStyle = async(req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8')
    let data = await (shopMessageModel.delCookStyle(req.body))
        // 这是给前端的反馈信息(是否保存成功)
    if (!!data) {
        res.render('shopMessage', {
            ret: true,
            data: JSON.stringify({
                msg: '菜系删除成功'
            })
        })
    } else {
        res.render('shopMessage', {
            ret: false,
            data: JSON.stringify({
                msg: '菜系删除失败'
            })
        })
    }
}
module.exports = {
    getShopMessage,
    findCookStyle,
    addCookStyle,
    delCookStyle
}