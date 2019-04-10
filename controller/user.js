const signModel = require('../models/user')
const signin = async(req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8')
    let { username, password } = req.body;
    // let username='admin'
    
    let result = await signModel.find({
        username,
    })
    console.log(result, 'rresult')
    let id = result._id
    if (!!result) {
        let isCorrect = (password === result.password)
            // 如果密码正确，构建用户登录成功的状态
        if (isCorrect) {
            res.render('user', {
                ret: true,
                data: JSON.stringify({
                    // 然后把用户名传给前端(浏览器)
                    username,
                    id
                })
            })
        } else {
            res.render('user', {
                ret: false,
                data: JSON.stringify({
                    msg: '用户名或密码错误！！'
                })
            })
        }
    } else {
        res.render('user', {
            ret: false,
            data: JSON.stringify({
                msg: '用户没有注册'
            }) 
        })
    }
}
module.exports = {
    signin
}