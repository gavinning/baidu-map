const host = {
    http: 'http://api.map.baidu.com/location/ip',
    https: 'https://api.map.baidu.com/location/ip',
}

const api = {

    query(ak, ip) {
        return {
            url: host.https,
            method: 'GET',
            params: {
                ak,
                ip,
                coor: 'bd09ll'
            }
        }
    }
}

const code = {
    1: "服务器内部错误",
    10: "上传内容超过8M",
    101: "AK参数不存在",
    102: "Mcode参数不存在，mobile类型mcode参数必需",
    200: "APP不存在，AK有误请检查再重试",
    201: "APP被用户自己禁用，请在控制台解禁",
    202: "APP被管理员删除",
    203: "APP类型错误类型21)及Mobile_IPhone（类型22）及Browser（类型3），除此之外的其他类型被认为是APP类型错误",
    210: "APP IP校验失败",
    211: "APP SN校验失败",
    220: "APP Referer校验失败",
    230: "APP Mcode码校验失败",
    240: "APP 服务被禁用",
    250: "用户不存在",
    251: "用户被自己删除",
    252: "用户被管理员删除",
    260: "服务不存在",
    261: "服务被禁用",
    301: "永久配额超限，限制访问",
    302: "天配额超限，限制访问",
    401: "当前并发量已经超过约定并发配额，限制访问",
    402: "当前并发量已经超过约定并发配额，并且服务总并发量也已经超过设定的总并发配额，限制访问",
    1001: "没有IPv6地址访问的权限",
}

module.exports = {
    api,
    code,
}
