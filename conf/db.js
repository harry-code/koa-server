// 环境变量
const env = process.env.NODE_ENV 

let MYSQL_CONF, REDIS_CONF;

switch (env) {
    case 'dev':
        MYSQL_CONF = {
            host: '139.159.251.151',
            port: '3306',
            user: 'root',
            password: 'Gok@2018#@!/',
            database: 'koa-db'
        }
        REDIS_CONF = {
            host: '127.0.0.1',
            port: '6379'
        }
        break;
    case 'production':
        MYSQL_CONF = {
            host: '139.159.251.151',
            port: '3306',
            user: 'root',
            password: 'Gok@2018#@!/',
            database: 'koa-db'
        }
        REDIS_CONF = {
            host: '127.0.0.1',
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