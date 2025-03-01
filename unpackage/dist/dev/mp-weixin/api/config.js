"use strict";
const common_vendor = require("../common/vendor.js");
const env = require("../env.js");
const BASE_URL = env.env.apiUrl;
const request = (options) => {
  return new Promise((resolve, reject) => {
    common_vendor.index.request({
      url: BASE_URL + options.url,
      // 拼接完整 URL
      method: options.method || "GET",
      // 默认 GET 请求
      data: options.data || {},
      // 请求参数
      header: {
        "Content-Type": "application/json",
        // 默认请求头
        ...options.header
        // 自定义请求头
      },
      success: (res) => {
        if (res.statusCode === 200) {
          resolve(res.data);
        } else {
          reject(res.data);
        }
      },
      fail: (err) => {
        reject(err);
      }
    });
  });
};
exports.request = request;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/config.js.map
