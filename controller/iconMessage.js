const iconMessageModel = require('../models/iconMessage')

// 更新店铺信息
const updateIcon =async (req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8')
    console.log('reqqqq', req.body)
    let result = await iconMessageModel.updateIcon(req.body)
    console.log(result)
    // 这是给前端的反馈信息(是否保存成功)
    if (!!result) {
        res.render('iconMessage', {
            ret: true,
            data: JSON.stringify({
                msg: '数据保存成功'
            })
        })
    } else {
        res.render('iconMessage', {
            ret: false,
            data: JSON.stringify({
                msg: '数据保存失败'
            })
        })
    }
} 
// 添加一个菜系
const addIcon = async(req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8')
    let result = await (iconMessageModel.addIcon({
            ...req.body,
        }))
        // 这是给前端的反馈信息(是否保存成功)
    if (!!result) {
        res.render('iconMessage', {
            ret: true,
            data: JSON.stringify({
                msg: '数据保存成功'
            })
        })
    } else {
        res.render('iconMessage', {
            ret: false,
            data: JSON.stringify({
                msg: '数据保存失败'
            })
        })
    }
}
// 找到一个菜系
const findIcon= async(req, res, next) => {
    // res.header('Content-Type', 'application/json; charset=utf-8')
    let data = await (iconMessageModel.findIcon())
        // 这是给前端的反馈信息(是否保存成功)
    if (!!data) {
        res.send(data)
    } else {
        res.render('iconMessage', {
            ret: false,
            data: JSON.stringify({
                msg: '数据查找失败'
            })
        })
    }
}
// 删除一个菜系
const delIcon = async(req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8')
    let data = await (iconMessageModel.delIcon(req.body))
        // 这是给前端的反馈信息(是否保存成功)
    if (!!data) {
        res.render('iconMessage', {
            ret: true,
            data: JSON.stringify({
                msg: '菜系删除成功'
            })
        })
    } else {
        res.render('iconMessage', {
            ret: false,
            data: JSON.stringify({
                msg: '菜系删除失败'
            })
        })
    }
}
// 修改一个菜系
const editIcon = async(req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8')
    console.log('reqqqq', req.body)
    let data = await (iconMessageModel.editIcon(req.body))
        // 这是给前端的反馈信息(是否保存成功)
    console.log('dataaaa', data)
    if (!!data) {
        res.render('iconMessage', {
            ret: true,
            data: JSON.stringify({
                msg: '菜系修改成功'
            })
        })
    } else {
        res.render('iconMessage', {
            ret: false,
            data: JSON.stringify({
                msg: '菜系修改失败'
            })
        })
    }
}
module.exports = {
  updateIcon,
  addIcon,
  delIcon,
  findIcon,
  editIcon

}