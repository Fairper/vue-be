const mongoose = require('../utils/database')

//创建scheme 创建集合 
const shopMessageSchema = new mongoose.Schema({
    items: Array,
    id: Number,
    sn: Number,
    userName: String,
    name: String,
    restrantName: String,
    startTime: String,
    endTime: String,
    type: String,
    area: String,
    cookingStyleArr: Array,
    activity: Array,
    deliveryMoney: Number,
    additionalMoney: Number,
    deliveryScope: String
}); 
// users是集合的名字，userSchema是集合的结构
const shopMessagerModel = mongoose.model('shopMessage',shopMessageSchema, 'shopMessage')
// 更新店铺信息
const updateShopMessage = (data) => {
    console.log('dataaaaaaa', data)
    let id = mongoose.Types.ObjectId(data._id); 
        return shopMessagerModel
        .updateOne({ '_id' : id}, data)
        .then((result) => {     
            return result
        })
        // catch表示find操作出错了，空数 据并不代表出错
        .catch((err) => {
            return false
        })
}

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
// 添加新店铺
const addShop= (data) => {
    return new shopMessagerModel(data)
        .save()
        .then((result) => {
            console.log('result', result)
            return result
        })
        .catch(err => {
            console.log('xxxxx', err)
        })
}
// 查找所有的菜系
const findCookStyle = () => {
    return shopMessagerModel
        .find({})
        .then((result) => {
            return result
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

module.exports={
    updateShopMessage,
    findCookStyle,
    addCookStyle,
    delCookStyle,
    editCookStyle,
    addShop
}