const xss = require('xss')
const { exec } = require('../db/mysql')

const getUser = async () => {
    let sql = `select * from user where 1=1`
    return await exec(sql)
}

module.exports = {
    getUser
}