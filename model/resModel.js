// 返回的数据结构模板
class BaseModel {
    constructor(data, msg) {
        if (typeof data === 'string') {
            this.msg = data
            data = null
            msg = null
        }

        if (data) {
            this.data = data
        }

        if (msg) {
            this.msg = msg
        }
    }
}
// 成功
class SuccessModel extends BaseModel {
    constructor(data, msg) {
        super(data, msg)
        this.code = 1
    }
}
// 失败
class ErrorModel extends BaseModel {
    constructor(data, msg) {
        super(data, msg)
        this.code = 0
    }
}

module.exports = {
    SuccessModel,
    ErrorModel
}