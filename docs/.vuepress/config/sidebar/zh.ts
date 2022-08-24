import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarZh: SidebarConfig = {
  '/zh/': [
    {
      text: '説明書',
      children: [
        '/zh/index.md',
        '/zh/config.md',
        '/zh/commandline.md',
      ],
    },
  ],
};
