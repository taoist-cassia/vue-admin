import axios from 'axios';
import service from "@/utils/request";


//封装post请求
export function get (url, data, callback) {
  return new Promise((resolve, reject) => {
    service.get(url, data).then(
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



