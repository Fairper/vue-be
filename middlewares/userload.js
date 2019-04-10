const auth = (req, res, next) => {
    res.header('Content-Type', 'application/json; charset=utf-8')

    let username = req.session.username;
    console.log('username', username);

    if (!!username) {
        console.log('0', 0);
        next()

    } else {
        res.render('position', {
            ret: false,
            data: JSON.stringify({
                msg: '没有访问权限，请登录~'
            })
        })
    }
}
module.exports = {
    auth
}