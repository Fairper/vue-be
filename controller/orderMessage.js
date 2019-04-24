const orderMessageModel = require('../models/orderMessage')
// 添加一个菜系
const addSuccessOrder = async(req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8')  
    for (var i=0; i< req.body.length; i++){
      let result = await (orderMessageModel.addSuccessOrder(req.body[i]))
      // 这是给前端的反馈信息(是否保存成功)
      if(i === req.body.length-1){
        if (!!result) {
          res.render('cookMessage', {
              ret: true,
              data: JSON.stringify({
                  msg: '订单添加成功'
              })
          })
        } else {
            res.render('cookMessage', {
                ret: false,
                data: JSON.stringify({
                    msg: '订单添加失败'
                })
            })
        }
      }
    }
}
// 找到所有菜系
const findSuccessOrder = async(req, res, next) => {
  // res.header('Content-Type', 'application/json; charset=utf-8')
  let data = await (orderMessageModel.findSuccessOrder())
      // 这是给前端的反馈信息(是否保存成功)
  if (!!data) {
      res.send(data)
  } else {
      res.render('cookMessage', {
          ret: false,
          data: JSON.stringify({
              msg: '订单查找失败'
          })
      })
  }
}
// 删除一个订单
const delSuccessOrder = async(req, res, next) => {
  // res.header('Content-Type', 'application/json; charset=utf-8')
  let data = await (orderMessageModel.delSuccessOrder(req.body))
      // 这是给前端的反馈信息(是否保存成功)
  if (!!data) {
      res.render('cookMessage', {
          ret: true,
          data: JSON.stringify({
              msg: '订单删除成功'
          })
      })
  } else {
      res.render('cookMessage', {
          ret: false,
          data: JSON.stringify({
              msg: '订单呢删除失败'
          })
      })
  }
}
module.exports = {
  addSuccessOrder,
  findSuccessOrder,
  delSuccessOrder
}