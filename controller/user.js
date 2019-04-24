const signModel = require('../models/user')
const signup = async(req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8')
    let { username, password, tel } = req.body;
    //判断用户名是否注册过
    let isSignup = !!(await signModel.find({ username }))

    if (isSignup) {
        res.render('user', {
            ret: true,
            data: JSON.stringify({
                msg: '用户名已经存在！'
            })
        })
        // 由于在res.render后还会执行后面的所以得加else进行区分
    } else {
        let result = await signModel.signup({
            username,
            password,
            tel
        })
        console.log('resss', result)
        if (!!result) {
            res.render('user', {
                ret: true,
                data: JSON.stringify({
                    msg: '用户注册成功！'
                })
            })

        }
    }
    // 当用户没有注册时，首先将密码加密，再将用户名和加密后的密码入库

}
const signin = async(req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8')
    let { username, password } = req.body;
    // let username='admin'
    
    let result = await signModel.find({
        username,
    })
    console.log(result, 'rresult')
    if (!!result) {
        let id = result._id
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
    signin,
    signup
}