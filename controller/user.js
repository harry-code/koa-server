const xss = require('xss')
const { genPassword } = require('../utils/cryp')

const getUser = async (username, password) => {
    username = escape(username)
    password = escape(genPassword(password))
    let sql = `select username from user where username=${username}`
    const rows = await exec(sql)
    return rows[0] || {}
}

module.exports = {
    getUser
}