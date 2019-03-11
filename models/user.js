const mongoose = require('../utils/database')

//创建scheme 创建集合 
const userSchema = new mongoose.Schema({
    username: String,
    password: String
}); 
// users是集合的名字，userSchema是集合的结构
const userModel = mongoose.model('users',userSchema)
const find = (condition) => {
        return userModel
        .findOne(condition)
        .then((result) => {
            return result
        })
}

module.exports={
    find
}