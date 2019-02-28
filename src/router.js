import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/layout.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '',
          name: 'binui',
          component: r => require.ensure([], () => r(require('./doc/index.md')))
        },
        {
          path: '/quick-start',
          name: '快速上手',
          component: r => require.ensure([], () => r(require('./doc/quick-start.md')))
        },
        {
          path: '/changelog',
          name: '更新日志',
          component: r => require.ensure([], () => r(require('./doc/changelog.md')))
        }
      ]
    },
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/flexbox',
          name: 'Flexbox 图标',
          component: r => require.ensure([], () => r(require('./doc/flexbox.md')))
        },
        {
          path: '/button',
          name: 'Button 按钮',
          component: r => require.ensure([], () => r(require('./doc/button.md')))
        },
        {
          path: '/icon',
          name: 'Icon 图标',
          component: r => require.ensure([], () => r(require('./doc/icon.md')))
        },
        {
          path: '/grid',
          name: 'Icon 图标',
          component: r => require.ensure([], () => r(require('./doc/grid.md')))
        },
        {
          path: '/badge',
          name: 'Badge 角标',
          component: r => require.ensure([], () => r(require('./doc/badge.md')))
        },
        {
          path: '/cell',
          name: 'Cell 表单',
          component: r => require.ensure([], () => r(require('./doc/cell.md')))
        }
      ]
    },
    {
      path: '/ceshi',
      name: 'ceshi',
      component: () => import('./views/ceshi.vue')
    }
  ]
})
