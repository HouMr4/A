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
    },
    search(params = "") {
        return http.get(api.search + 'pageNum=' + params.pageNum + '&productId=' + params.productId, params)
    },
    search2(params = "") {
        return http.get(api.search + 'pageNum=' + params.pageNum + '&productName=' + params.product, params)
    },
    detail(params = "") {
        return http.get(api.detail + 'productId=' + params.productId, params)
    },
    fenlei1(params = "") {
        return http.get(api.fenlei1 + 'categoryId=' + params.categoryId, params)
    },
    status(params = "") {
        return http.get(api.status + 'productId=' + params.productId + '&status=' + params.status)
    }
}
