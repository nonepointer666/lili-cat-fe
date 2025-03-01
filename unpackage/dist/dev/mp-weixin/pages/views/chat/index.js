"use strict";
const common_vendor = require("../../../common/vendor.js");
const api_index = require("../../../api/index.js");
const _sfc_main = common_vendor.defineComponent({
  data() {
    return {
      inputMessage: "",
      chatList: []
      // 聊天记录
    };
  },
  methods: {
    // 发送消息
    sendMessage() {
      if (!this.inputMessage.trim()) {
        common_vendor.index.showToast({
          title: "消息不能为空",
          icon: "none"
        });
        return null;
      }
      this.chatList.push({ role: "user", content: this.inputMessage });
      this.inputMessage = "";
      this.chatList.push({ role: "bot", content: "", thinking: true });
      this.getBotReply();
    },
    // 调用接口获取回复
    getBotReply() {
      var _a, _b;
      return common_vendor.__awaiter(this, void 0, void 0, function* () {
        try {
          const response = yield api_index.getChatMsg(new UTSJSONObject({
            content: (_a = this.chatList[this.chatList.length - 2]) === null || _a === void 0 ? void 0 : _a.content
          }));
          if (response) {
            const botMessage = ((_b = response.choices[0]) === null || _b === void 0 ? void 0 : _b.message.content) || "我不知道该说什么";
            this.chatList[this.chatList.length - 1] = {
              role: "bot",
              content: botMessage,
              thinking: false
            };
          } else {
            this.chatList[this.chatList.length - 1] = {
              role: "bot",
              content: "请求失败，请重试",
              thinking: false
            };
          }
        } catch (error) {
          this.chatList[this.chatList.length - 1] = {
            role: "bot",
            content: "网络错误，请检查网络连接",
            thinking: false
          };
          common_vendor.index.__f__("error", "at pages/views/chat/index.uvue:90", "请求失败：", error);
        }
      });
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.chatList, (item, index, i0) => {
      return common_vendor.e({
        a: common_vendor.t(item.content),
        b: item.role === "bot" && item.thinking
      }, item.role === "bot" && item.thinking ? {} : {}, {
        c: common_vendor.n(item.role === "user" ? "user-bubble" : "bot-bubble"),
        d: index
      });
    }),
    b: common_vendor.o((...args) => $options.sendMessage && $options.sendMessage(...args)),
    c: $data.inputMessage,
    d: common_vendor.o(($event) => $data.inputMessage = $event.detail.value),
    e: common_vendor.o((...args) => $options.sendMessage && $options.sendMessage(...args)),
    f: common_vendor.sei(_ctx.virtualHostId, "view")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c8947235"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/views/chat/index.js.map
