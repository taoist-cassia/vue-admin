import axios from 'axios';

// 创建axios，赋给变量service
// 手把手撸码前端API，地址 http://www.web-jshtml.cn/productApi

const BASEURL = process.env.NODE_ENV === 'production' ? process.env.VUE_APP_API : process.env.VUE_APP_API;
console.log(BASEURL);
const service = axios.create({
    baseURL: BASEURL,  // http://192.168.0.106:8080/devApi/  == http://www.web-jshtml.cn/productapi/productapi
    timeout: 15000,   // 超时
    // 网络请求接口，假设 5000
    // 1000 2000，
});

//添加请求拦截器
service.interceptors.request.use(function (config){
    //在发送请求之前做什么
    return config;
},function (error){
    //对请求错误做什么
    return error;
})


//添加响应拦截
service.interceptors.response.use(function (response){
    //对响应数据做什么
    return response;
},function (error){
    //对对响应错误做什么
    return Promise.reject(error);
})

export default service;

/**
 * 使用export default时，但不能同时存在多个default。
 * 文件 import 不需要花括号，
 */
