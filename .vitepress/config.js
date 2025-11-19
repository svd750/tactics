import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/tactics/',
  title: "Тактика военных действий",
  description: "Цель: познакомиться с азами планирования при подготовке к выполнению боевых задач",
  lang: 'ru-RU',
  cleanUrls: true,
  ignoreDeadLinks: true,
  srcDir: 'src',
  metaChunk: true,
  vite: {
    server: {
      port: 8989,
      https: false,
      host: '0.0.0.0',
      allowedHosts: true,
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: { label: 'Содержание страницы' },

    sidebar: [
      {
        text: 'Блок 1. "Основы работы командира по подготовке боя"',
        link: '/block-1/',
        collapsed: true,
        items: [
          { text: '01. Основные термины', link: '/block-1/lesson-01/' },
          { text: '02. Уяснение задачи и Оценка обстановки', link: '/block-1/lesson-02/' },
          { text: '03. Схема местности', link: '/block-1/lesson-03/' },
          { text: '04. Система огня', link: '/block-1/lesson-04/' }
        ]
      },
      { text: 'Блок 2. "Основы организации обороны отделения и взвода"', link: '/block-2/' },
      { text: 'Блок 3. "Основы организации наступления отделения и взвода"', link: '/block-3/' }
    ],

    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },

    notFound: {
      title: 'СТРАНИЦА НЕ НАЙДЕНА',
      quote:
          'Но если ты не изменишь направление и продолжишь искать, ты можешь оказаться там, куда направляешься.',
      linkLabel: 'перейти на главную',
      linkText: 'Отведи меня домой'
    },

    darkModeSwitchLabel: 'Оформление',
    lightModeSwitchTitle: 'Переключить на светлую тему',
    darkModeSwitchTitle: 'Переключить на тёмную тему',
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'Вернуться к началу',
    langMenuLabel: 'Изменить язык',
    skipToContentLabel: 'Перейти к содержимому'
  }
})
