const mongoose = require('../utils/database')

//创建scheme 创建集合 
const cookMessageSchema = new mongoose.Schema({
    sn: Number,
    kind: String,
    name: String,
    description: String,
    priority: Number,
    sellPrice: Number,
    price: Number,
    startTime: String,
    icon: String
}); 
// cookMessage是集合的名字，cookMessageSchema是集合的结构
const cookMessagerModel = mongoose.model('cookMessage',cookMessageSchema, 'cookMessage')
// 添加菜品
const addCook = (data) => {
    return new cookMessagerModel(data)
        .save()
        .then((result) => {
            return result
        })
        .catch(err => {
            return err
        })
}
// 查找菜品
const findCook = () => {
    return cookMessagerModel
        .find({})
        .then((result) => {
            return result
        })
        .catch(err => {
            return err
        })
}
// 删除某一个菜品
const delCook = (data) => {
    let id = mongoose.Types.ObjectId(data.id); 
    return cookMessagerModel
        .findOneAndDelete({ '_id' : id})
        .then((result) => {
            return result
        })
        .catch(err => {
            return false
        })
}
// 编辑某一个菜品
const editCook = (data) => {
    console.log('dataaaaaaa', data)
    let id = mongoose.Types.ObjectId(data._id); 
    return cookMessagerModel
        .updateOne({ '_id' : id}, data)
        .then((result) => {
            return result
        })
        .catch(err => {
            return false
        })
}
module.exports={
    addCook,
    findCook,
    delCook,
    editCook
}