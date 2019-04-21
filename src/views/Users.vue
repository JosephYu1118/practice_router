<template lang="pug">
.message_box
  h1 My First Vue Project User
  h2(v-if="user") {{ user.name }} has logged in!
  h2(v-else) Hello, {{ $route.params.name }}!
  ul
    li(v-for="todo in mapTodos")
      h3 {{ todo.title }}
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      users: [
        {
          id: 1,
          name: 'Darren'
        }, {
          id: 2,
          name: 'Vincent'
        }
      ]
    }
  },
  computed: {
    ...mapState(['todos']),
    user () {
      return this.users.find(user => user.id === parseInt(this.$route.params.num))
    },
    mapTodos () {
      return this.todos.filter(todo => {
        return todo.userId === parseInt(this.$route.params.num)
      })
    }
  }
}
</script>

<style lang="sass">
.message_box
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  h1, h2
    display: flex
    justify-content: center
    align-items: center
  h2
    margin: 20px 0 0 0
  ul
    max-width: 500px
    margin: 20px
    display: flex
    justify-content: center
    align-items: center
    flex-direction: column
</style>
