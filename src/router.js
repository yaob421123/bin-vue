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
          path: '/button',
          name: 'Button 按钮',
          component: r => require.ensure([], () => r(require('./doc/button.md')))
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    }
  ]
})
