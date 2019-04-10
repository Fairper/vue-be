const shopMessageModel = require('../models/shopMessage')

// 更新店铺信息
const updateShopMessage =async (req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8')
    console.log('reqqqq', req.body)
    let result = await shopMessageModel.updateShopMessage(req.body)
    console.log(result)
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
// 添加一个菜系
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
// 添加一个菜系
const addShop = async(req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8')
    let result = await (shopMessageModel.addShop({
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
// 找到一个菜系
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
// 修改一个菜系
const editCookStyle = async(req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8')
    console.log('reqqqq', req.body)
    let data = await (shopMessageModel.editCookStyle(req.body))
        // 这是给前端的反馈信息(是否保存成功)
    console.log('dataaaa', data)
    if (!!data) {
        res.render('shopMessage', {
            ret: true,
            data: JSON.stringify({
                msg: '菜系修改成功'
            })
        })
    } else {
        res.render('shopMessage', {
            ret: false,
            data: JSON.stringify({
                msg: '菜系修改失败'
            })
        })
    }
}
module.exports = {
    updateShopMessage,
    findCookStyle,
    addCookStyle,
    delCookStyle,
    editCookStyle,
    addShop
}