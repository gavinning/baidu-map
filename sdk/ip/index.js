const axios = require('axios')
const { api, code } = require('./conf')

module.exports = (ak, ip) => {
    return axios(api.query(ak, ip))
        .then(response => response.data)
        .then(data => {
            if (0 !== Number(data.status)) {
                throw new Error(code[data.status] || data.status)
            }
            return data
        })
}
