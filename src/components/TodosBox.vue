<template lang="pug">
.todos_box
  .row
    button(@click="setTodos(['ㄅ', 'ㄆ'])") Set Todos
    button(@click="loadTodos") Load Todos
    button(@click="clearTodos") Clear Todos
  ul
    li(v-for="todo in $store.state.todos")
      h3(v-if="todo.id") {{ todo.id }}
      h3(v-else) {{ todo }}
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState(['todos'])
  },
  methods: {
    ...mapMutations(['setTodos']),
    ...mapActions(['loadTodos']),
    clearTodos () {
      this.setTodos([])
    }
  },
  mounted () {
    this.setTodos(['a', 'b', 'c', 'd'])
  }
}
</script>

<style lang="sass">
.todos_box
  margin: 20px 0
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  .row
    button
      margin: 0 5px
  ul
    max-width: 500px
    display: flex
    justify-content: center
    align-items: center
    flex-wrap: wrap
    li
      width: 50px
      display: flex
      justify-content: center
      align-items: center
</style>
