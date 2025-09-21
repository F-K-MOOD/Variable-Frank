import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/Variable-Frank/",

  lang: "zh-CN",
  title: "变量弗兰克",
  description: "",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
