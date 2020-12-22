import axios from "axios";
import qs from "qs";

// 读取环境配置获取接口地址
axios.defaults.baseURL = "";

//post请求头
axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded;charset=UTF-8";
//设置超时
axios.defaults.timeout = 10000;

axios.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    response => {
        if (response.status == 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    error => {
        Dialog.alert({
            title: '提示',
            message: '网络请求失败，请刷新重试',
        })
    }
);