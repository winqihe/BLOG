import axios from 'axios'
import Element from 'element-ui'
import router from './router/index'
import store from './store/index'

axios.defaults.timeout = 5000; //设置超时时间
axios.defaults.baseURL = "http://localhost:7099" //调用的数据接口

// 前置拦截
//添加请求拦截器
axios.interceptors.request.use(config => {
        return config
    })
    //添加响应拦截器
axios.interceptors.response.use(response => {
        let res = response.data;

        console.log("=================")
        console.log(res)
        console.log("=================")

        if (res.code === 200) {
            return response
        } else {

            Element.Message.error('错了哦，这是一条错误消息', { duration: 3 * 1000 })

            return Promise.reject(response.data.msg)
        }
    },
    error => {
        console.log(error)
        if (error.response.data) {
            error.message = error.response.data.msg
        }

        if (error.response.status === 401) {
            store.commit("REMOVE_INFO")
            router.push("/login")
        }

        Element.Message.error(error.message, { duration: 3 * 1000 })
        return Promise.reject(error)
    }
)