import axios from 'axios';
import router from '../router'
import { Loading } from 'element-ui'
import QS from 'qs'

const request = axios.create({
    baseURL: 'http://admintest.happymmall.com/',
    timeout: 10000
})

//创建loading加载
const loading = {
    loadingService: null,
    open() {
        if (this.loadingService == null) {
            this.loadingService = Loading.service({
                target: ".main",
                text: "拼命加载中。。。。",
                background: "rgba(0,0,0,0.5)"
            })
        }
    },
    close() {
        if (this.loadingService != null) {
            this.loadingService.close();
        }
        this.loadingService = null;
    }
}

request.interceptors.request.use(function (config) {
    loading.open();
    return config;
}, function (error) {
    this.$message({
        message: '请求失败',
        type: 'error'
    })
    loading.close()
    // 对请求错误做些什么
    return Promise.reject(error);
});



//配置响应 拦截  ---   响应数据的时候触发,响应没有结束
// 添加响应拦截器
request.interceptors.response.use(function (response) {
    // 对响应数据做点什么   
    loading.close();
    if (response.data.code == 401) {//401是token过期
        this.$message({
            message: '登陆过期,请重新登陆',
            type: 'error'
        })
        removeToken();
        router.push('/login')
    }
    return response;
}, function (error) {
    loading.close()
    // 对响应错误做点什么
    return Promise.reject(error);
});

export default {
    get(url, data) {
        let params = data || ''
        return new Promise((resolve, reject) => {
            request
                .get(url, params)
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err.data)
                })
        })
    },

    /**
     * post方法，对应post请求
     * @param {String} url [请求的url地址]
     * @param {Object} params [请求时携带的参数]
     */
    post(url, data) {
        let params = data || ''
        return new Promise((resolve, reject) => {
            request
                .post(url, QS.stringify(params))
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err.data)
                })
        })
    },
    /**
     * upload方法，对应upload请求
     * @param {String} url [请求的url地址]
     * @param {Object} params [请求时携带的参数]
     */
    upload(url, data) {
        let params = data || ''
        return new Promise((resolve, reject) => {
            request
                .upload(url, QS.stringify(params))
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err.data)
                })
        })
    },

    /**
     * download方法，对应download请求
     * @param {String} url [请求的url地址]
     * @param {Object} params [请求时携带的参数]
     */
    download(url, data) {
        let params = data || ''
        return new Promise((resolve, reject) => {
            request
                .download(url, QS.stringify(params))
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err.data)
                })
        })
    },
    /**
     * put方法，对应put请求
     * @param {String} url [请求的url地址]
     * @param {Object} params [请求时携带的参数]
     */
    put(url, data) {
        let params = data || ''
        return new Promise((resolve, reject) => {
            request
                .put(url, QS.stringify(params))
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err.data)
                })
        })
    },
    /**
     * delete方法，对应delete请求
     * @param {String} url [请求的url地址]
     * @param {Object} params [请求时携带的参数]
     */
    delete(url, data) {
        let params = data || ''
        return new Promise((resolve, reject) => {
            request
                .delete(url, QS.stringify(params))
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(err.data)
                })
        })
    }
}