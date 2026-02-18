import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "肇庆医学院药学院班级主页",
  description: "Class Homepage for Pharmacy School, Zhaoqing Medical College",
  lang: 'zh-CN',
  cleanUrls: true,
  
  // Mobile optimization meta tags are added by default by VitePress, 
  // but we can add more if needed.
  head: [
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }],
    // Dify Chatbot Integration Placeholder
    // Replace the following script with your Dify chatbot script
    // ['script', {}, `
    //   window.difyChatbotConfig = {
    //     token: 'YOUR_DIFY_TOKEN_HERE'
    //   }
    // `],
    // ['script', { src: 'https://udify.app/embed.min.js', id: 'YOUR_DIFY_ID', defer: 'true' }]
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '班级公告', link: '/notices/' },
      { text: '学习资源', link: '/resources/' },
      { text: '班级活动', link: '/activities/' },
      { text: '关于我们', link: '/about/' }
    ],

    sidebar: {
      '/notices/': [
        {
          text: '班级公告',
          items: [
            { text: '公告列表', link: '/notices/' },
            // Add new notices here
          ]
        }
      ],
      '/resources/': [
        {
          text: '学习资源',
          items: [
            { text: '资源列表', link: '/resources/' },
            // Add new resources here
          ]
        }
      ],
      '/activities/': [
        {
          text: '班级活动',
          items: [
            { text: '活动回顾', link: '/activities/' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' } // Placeholder, user can change to their repo
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024 肇庆医学院药学院'
    },
    
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    
    outline: {
      label: '页面导航'
    },
    
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short'
      }
    },
    
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    }
  }
})
