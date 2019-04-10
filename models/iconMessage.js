const mongoose = require('../utils/database')

//创建scheme 创建集合 
const iconMessageSchema = new mongoose.Schema({
  cookingStyleArr: Array
}); 
// users是集合的名字，userSchema是集合的结构
const iconMessagerModel = mongoose.model('iconMessage',iconMessageSchema, 'iconMessage')
// 更新icon图标信息
const updateIcon = (data) => {
    console.log('dataaaaaaa', data)
    let id = mongoose.Types.ObjectId(data._id); 
        return iconMessagerModel
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
const addIcon = (data) => {
    return iconMessagerModel
        .updateMany({ $push: { cookingStyleArr: data } })
        .then((result) => {
            console.log('result', result)
            return result
        })
        .catch(err => {
            console.log('xxxxx', err)
        })
}
// 查找所有的菜系
const findIcon = () => {
    return iconMessagerModel
        .find({})
        .then((result) => {
            return result
        })
        .catch(err => {
            return false
        })
} 
// 删除某一个菜系
const delIcon = (data) => {
    return iconMessagerModel
        .updateMany({$pull:{'cookingStyleArr': data}})
        .then((result) => {
            return result
        })
        .catch(err => {
            return false
        })
}
// 编辑某一个菜系，更新
const editIcon = (data) => {
    let arr = `cookingStyleArr.${data.index}.name`
    return iconMessagerModel
        .updateMany({$set:{[arr]: data.nameUpdate}}, false)
        .then((result) => {
            return result
        })
        .catch(err => {
            return false
        })
}

module.exports={
  updateIcon,
  addIcon,
  findIcon,
  delIcon,
  editIcon
}