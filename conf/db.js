// 环境变量
const env = process.env.NODE_ENV 

let MYSQL_CONF, REDIS_CONF;

switch (env) {
    case 'dev':
        MYSQL_CONF = {
            database: 'gok-fun',
            user: 'root',
            password: 'liuyao0131ly',
            options: {
                host: '121.5.46.135', // 连接的 host 地址
                dialect: 'mysql', // 连接到 mysql
                pool: {
                    max: 5,
                    min: 0,
                    acquire: 30000,
                    idle: 10000
                },
                define: {
                    timestamps: false, // 默认不加时间戳
                    freezeTableName: true // 表名默认不加 s
                },
                timezone: '+08:00'
            }
        }
        REDIS_CONF = {
            host: '121.5.46.135',
            port: '6379'
        }
        break;
    case 'production':
        MYSQL_CONF = {
            database: 'gok-fun',
            user: 'root',
            password: 'liuyao0131ly',
            options: {
                host: '121.5.46.135', // 连接的 host 地址
                dialect: 'mysql', // 连接到 mysql
                pool: {
                    max: 5,
                    min: 0,
                    acquire: 30000,
                    idle: 10000
                },
                define: {
                    timestamps: false, // 默认不加时间戳
                    freezeTableName: true // 表名默认不加 s
                },
                timezone: '+08:00'
            }
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