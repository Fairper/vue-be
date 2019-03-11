const mongoose = require('../utils/database')

//创建scheme 创建集合 
const shopMessageSchema = new mongoose.Schema({
    items: Array,
    userId: String,
    userName: String,
    name: String,
    restaurantName: String,
    businessTime: String,
    cookingStyle: String,
    cookingStyleArr: Array,
    activity: Array,
    deliveryScope: Array,
    deliveryMoney: Number
}); 
// users是集合的名字，userSchema是集合的结构
const shopMessagerModel = mongoose.model('shopMessage',shopMessageSchema, 'shopMessage')
// 添加菜系
const addCookStyle = (data) => {
    return shopMessagerModel
        .updateMany({ $push: { cookingStyleArr: data } })
        .then((result) => {
            return result
        })
        .catch(err => {
            console.log('xxxxx', err)
        })
}
// 查找所有的菜系
const findCookStyle = () => {
    return shopMessagerModel
        .find({_id: '5c86167fe753471418f58553'})
        .then((result) => {
            return result[0].cookingStyleArr
        })
        .catch(err => {
            return false
        })
}
// 删除某一个菜系
const delCookStyle = (data) => {
    return shopMessagerModel
        .updateMany({$pull:{'cookingStyleArr': data}})
        .then((result) => {
            return result
        })
        .catch(err => {
            return false
        })
}
// 编辑某一个菜系，更新
const editCookStyle = (data) => {
    let arr = `cookingStyleArr.${data.index}.name`
    return shopMessagerModel
        .updateMany({$set:{[arr]: data.nameUpdate}}, false)
        .then((result) => {
            return result
        })
        .catch(err => {
            return false
        })
}
const findShopMessage = () => {
        return shopMessagerModel
        .find()
        .then((result) => {     
            return result
        })
        // catch表示find操作出错了，空数 据并不代表出错
        .catch((err) => {
            return false
        })
}

module.exports={
    findShopMessage,
    findCookStyle,
    addCookStyle,
    delCookStyle,
    editCookStyle
}