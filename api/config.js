import { env } from '../env.js'

const BASE_URL = env.apiUrl; // 根据环境配置不同的基地址

const request = (options) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: BASE_URL + options.url, // 拼接完整 URL
      method: options.method || 'GET', // 默认 GET 请求
      data: options.data || {}, // 请求参数
      header: {
        'Content-Type': 'application/json', // 默认请求头
        ...options.header, // 自定义请求头
      },
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data); // 请求成功
        } else {
          reject(res.data); // 请求失败
        }
      },
      fail: (err) => {
        reject(err); // 网络错误
      },
    });
  });
};

export default request;