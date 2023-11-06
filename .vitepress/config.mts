import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "awsome linhema",
  description: "a blog for ppl",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "主頁", link: "/" },
      { text: "專案", link: "/markdown-examples" },
      { text: "test", link: "/doc/test" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
          {
            text: "🖊️ LeetCode",
            items: [
              { text: "GCD 最大公因數", link: "/doc/leetcode" },
              { text: "Item B", link: "/item-b" },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
