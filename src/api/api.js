import axios from 'axios';
import service from "@/utils/request";


//封装post请求
export function post (url, data, callback) {
  return new Promise((resolve, reject) => {
    service.post(url, data).then(
      response => {
        // console.log(response.data.code)
        resolve(response.data);
        callback(response.data);
      },
      err => {
        reject(err);
        callback(err);
      }
    )
  })
}


// 登录获取验证码
export const getSms = (data, callback) => post('/getSms/', data, callback);