import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Navbar from '@/components/Navbar'
import TodosBox from '@/components/TodosBox'
import Daybook from '@/components/Daybook'
import ListRecords from '@/components/ListRecords'

Vue.component('Navbar', Navbar)
Vue.component('TodosBox', TodosBox)
Vue.component('Daybook', Daybook)
Vue.component('ListRecords', ListRecords)
// import 完之後記得要註冊 component 才可以使用元件
// 元件的註冊必須在 Vue Instance 初始化前完成

Vue.config.productionTip = false

// store.commit('setTodos', [1, 2, 3, 4, 5])
// store.dispatch('loadTodos')
// 通常不會在這裡做

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
