import { defaultTheme, defineUserConfig } from 'vuepress';
import { searchPlugin } from '@vuepress/plugin-search';
import { shikiPlugin } from '@vuepress/plugin-shiki';
import markdownItFootnote from 'markdown-it-footnote';
import { navbarEn } from './config/navbar/en';
import { sidebarEn } from './config/sidebar/en';
import { navbarZh } from './config/navbar/zh';
import { sidebarZh } from './config/sidebar/zh';
import { head } from './config/head';

export default defineUserConfig({
  base: '/',
  head,
  locales: {
    '/': {
      lang: 'en-US',
      title: 'zProtect Documentation',
      description: 'Documentation for all things zProtect.',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'zProtect 説明書'
    },
    
  },
  theme: defaultTheme({
    contributors: false,
    docsRepo: 'https://github.com/zProtect-Development/Documentation',
    docsBranch: 'main',
    docsDir: 'docs',
    editLink: true,
    editLinkPattern: ':repo/edit/:branch/:path',
    lastUpdated: true,
    logo: '/logo.png',
    locales: {
      '/': {
        sidebar: sidebarEn,
        navbar: navbarEn,
      },
      '/zh/': {
        // navbar
        navbar: navbarZh,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',
        // sidebar
        sidebar: sidebarZh,
        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
      },
    }
  }),
  plugins: [
    searchPlugin({
    }),
    shikiPlugin({
      theme: 'dark-plus',
    }),
  ],
  extendsMarkdown: (md) => {
    md.use(markdownItFootnote)
  }
});
