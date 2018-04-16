import Vue from 'vue'
import index from './index.vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import routers from './routes'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      component: index,
      children: [
        routers,
        {
          path: 'index',
          name: 'Hello',
          component: Hello
        }
      ]
    },
    {
      path: '*',
      redirect: '/index'
    }
  ]
})

router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('demo-token')
  if (to.path === '/todo') {
    if (token) {
      Vue.prototype.$http.defaults.headers.common['Authorization'] = 'Bearer ' + token
      next()
    }
  } else {
    next()
  }
})

export default router
