const mongoose = require('../utils/database')

//创建scheme 创建集合 
const orderMessageSchema = new mongoose.Schema({
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
const orderMessagerModel = mongoose.model('orderMessage',orderMessageSchema, 'orderMessage')
// 存储  订单提交成功
const addSuccessOrder = (data) => {
  return new orderMessagerModel(data)
  .save()
  .then((result) => {
      return result
  })
  .catch(err => {
      return err
  })
}
// 查找支付成功的订单
const findSuccessOrder = () => {
  return orderMessagerModel
      .find({})
      .then((result) => {
          return result
      })
      .catch(err => {
          return err
      })
}
// 删除某一条订单
const delSuccessOrder = (data) => {
  let id = mongoose.Types.ObjectId(data.id); 
  return orderMessagerModel
      .findOneAndDelete({ '_id' : id})
      .then((result) => {
          return result
      })
      .catch(err => {
          return false
      })
}
module.exports={
  addSuccessOrder,
  findSuccessOrder,
  delSuccessOrder
}