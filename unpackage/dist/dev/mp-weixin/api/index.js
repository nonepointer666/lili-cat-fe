"use strict";
const api_config = require("./config.js");
function getChatMsg(data) {
  return api_config.request({
    url: "/chat",
    method: "POST",
    data
  });
}
exports.getChatMsg = getChatMsg;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/index.js.map
