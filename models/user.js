const mongoose = require('../utils/database')

//创建scheme 创建集合 
const userSchema = new mongoose.Schema({
    username: String,
    password: String
}); 
// users是集合的名字，userSchema是集合的结构
const userModel = mongoose.model('user',userSchema, 'user')
const find = (condition) => {
        return userModel
        .findOne(condition)
        .then((result) => {
            return result
        })
}
const signup = (data) => {
    // 只有在new时可以写成方法
    return new userModel(data)
        // 注册是保存
        .save()
        .then((result) => {
            console.log('result', result)
            return result
        })
}
module.exports={
    find,
    signup
}