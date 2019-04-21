import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
// 檔名 .vue 可以不用打

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/user/id/:num',
      name: 'user',
      component: () => import('./views/Users')
      // 愈長的 path 盡量往前面放才不會與後面的搞混
    }, {
      path: '/user/:name',
      name: 'user',
      component: () => import('./views/Users')
    }
  ]
})
