// 环境变量
const env = process.env.NODE_ENV 

let MYSQL_CONF, REDIS_CONF;

switch (env) {
    case 'dev':
        MYSQL_CONF = {
            host: '121.5.46.135',
            port: '3306',
            user: 'root',
            password: 'liuyao0131ly',
            database: 'gok-fun'
        }
        REDIS_CONF = {
            host: '121.5.46.135',
            port: '6379'
        }
        break;
    case 'production':
        MYSQL_CONF = {
            host: '121.5.46.135',
            port: '3306',
            user: 'root',
            password: 'liuyao0131ly',
            database: 'gok-fun'
        }
        REDIS_CONF = {
            host: '121.5.46.135',
            port: '6379'
        }
        break;
    default:
        break;
}

module.exports = {
    MYSQL_CONF,
    REDIS_CONF
}