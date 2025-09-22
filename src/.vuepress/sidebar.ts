import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "JavaScript",
      icon: "code",
      prefix: "posts/JavaScript/",
      collapsible:true,
      children: [
        { text: "实现继承方式", icon: "link", link: "实现继承方式" },
        { text: "异步编程方案", icon: "bolt", link: "异步编程方案" },
        { text: "this指向问题", icon: "anchor", link: "this指向问题" },
      ],
    },
    {
      text: "浏览器原理",
      icon: "globe",
      prefix: "posts/浏览器原理/",
      collapsible:true,
      children: [
        { text: "渲染原理", icon: "paint-brush", link: "渲染原理" },
        { text: "缓存机制", icon: "database", link: "缓存机制" },
      ],
    },
    {
      text: "前端工程化",
      icon: "truck",
      collapsible:true,
      prefix: "posts/前端工程化/",
      children: [
        { text: "Webpack构建原理", icon: "cube", link: "Webpack构建原理" },
        { text: "Vite构建工具", icon: "rocket", link: "Vite构建工具" },
      ],
    },
    {
      text: "项目流",
      icon: "link",
      prefix: "posts/项目流/",
      collapsible:true,
      children: [
        { text: "请求的二次封装", icon: "link", link: "请求的二次封装" },
      ],
    },
  ],
});
