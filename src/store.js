import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [1, 2, 3]
  },
  mutations: {
    setTodos (state, value) {
      state.todos = value
    }
  },
  actions: {
    loadTodos (context) {
      let todosUrl = 'https://jsonplaceholder.typicode.com/todos'
      axios.get(todosUrl).then(res => {
        context.commit('setTodos', res.data)
      })
    }
  }
})

export default store
