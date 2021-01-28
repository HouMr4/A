import api from './api'
import http from './http'
export default {
    login(params = "") {
        return http.post(api.login, params)
    },
    logout(params = "") {
        return http.post(api.logout, params)
    },
    product(params = "") {
        return http.get(api.product + 'pageNum=' + params.pageNum, params)
    }
}