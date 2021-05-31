const crypto = require('crypto')

// 密匙
const SECRET_KEY = 'lly0131_LY!@#'

// md5 加密
function md5(content) {
    let md5 = crypto.createHash('md5')
    return md5.update(content).digest('hex')
}

// 加密方法
function genPassword(password) {
    const str = `password=${password}&key=${SECRET_KEY}`
    return md5(str)
}

module.exports = {
    genPassword
}