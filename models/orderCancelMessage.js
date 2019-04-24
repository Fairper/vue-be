const mongoose = require('../utils/database')

//创建scheme 创建集合 
const orderCancelMessageSchema = new mongoose.Schema({
    name: String,
    price: Number,
    num: Number,
    time: String,
    id: Number,
    img: String,
    kind: String,
    desc: String,
    priority: Number
}); 
// users是集合的名字，userSchema是集合的结构
const orderCancelMessagerModel = mongoose.model('orderCancelMessage',orderCancelMessageSchema, 'orderCancelMessage')
// 存储  订单提交成功
const addCancelOrder = (data) => {
  return new orderCancelMessagerModel(data)
  .save()
  .then((result) => {
      return result
  })
  .catch(err => {
      return err
  })
}
// 查找支付成功的订单
const findCancelOrder = () => {
  return orderCancelMessagerModel
      .find({})
      .then((result) => {
          return result
      })
      .catch(err => {
          return err
      })
}
// 删除某一条订单
const delCancelOrder = (data) => {
  let id = mongoose.Types.ObjectId(data.id); 
  return orderCancelMessagerModel
      .findOneAndDelete({ '_id' : id})
      .then((result) => {
        console.log('result', result)
          return result
      })
      .catch(err => {
          return false
      })
}
module.exports={
  addCancelOrder,
  delCancelOrder,
  findCancelOrder
}