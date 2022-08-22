import type { HeadConfig } from '@vuepress/core';

export const head: HeadConfig[] = [
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: `/favicon-16.png`,
    },
  ],
  [
    'link',
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: `/favicon-32.png`,
    },
  ],
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
]