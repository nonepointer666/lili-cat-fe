"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = common_vendor.defineComponent({
  data() {
    return {
      // 功能入口数据
      gridList: [
        new UTSJSONObject({ name: "聊天", icon: "/static/img/chat.png", path: "/pages/views/chat/index" }),
        new UTSJSONObject({ name: "健身", icon: "/static/img/running.png", path: "/pages/views/function2" }),
        new UTSJSONObject({ name: "美食", icon: "/static/img/pizza.png", path: "/pages/views/function3" }),
        new UTSJSONObject({ name: "旅游", icon: "/static/img/airplane.png", path: "/pages/views/function4" })
      ],
      // 底部导航栏数据
      tabbarList: [
        new UTSJSONObject({ name: "首页", icon: "/static/img/home1.png", path: "/pages/index/index" }),
        new UTSJSONObject({ name: "分类", icon: "/static/img/category1.png", path: "/pages/category/category" }),
        new UTSJSONObject({ name: "我的", icon: "/static/img/user1.png", path: "/pages/user/user" })
      ]
    };
  },
  methods: {
    // 跳转到功能页面
    navigateTo(path = null) {
      common_vendor.index.navigateTo({
        url: path
      });
    },
    // 切换底部导航栏
    switchTab(path = null) {
      common_vendor.index.switchTab({
        url: path
      });
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_assets._imports_1,
    c: common_assets._imports_2,
    d: common_vendor.f($data.gridList, (item, index, i0) => {
      return {
        a: item.icon,
        b: common_vendor.t(item.name),
        c: index,
        d: common_vendor.o(($event) => $options.navigateTo(item.path), index)
      };
    }),
    e: common_vendor.f($data.tabbarList, (item, index, i0) => {
      return {
        a: item.icon,
        b: common_vendor.t(item.name),
        c: index,
        d: common_vendor.o(($event) => $options.switchTab(item.path), index)
      };
    }),
    f: common_vendor.sei(_ctx.virtualHostId, "view")
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/home/index.js.map
