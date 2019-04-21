<template lang="pug">
#app
  Navbar
  transition(name="page" mode="out-in")
    router-view(:key="$route.path")
  TodosBox
  Daybook
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="sass">
// 在這裡設定整份文件的全域設定
html, body
  width: 100%
  height: 100%
  min-height: 100%
  margin: 0

ul, li, h1, h2, h3, h4, h5, h6
  margin: 0
  padding: 0
  list-style-type: none

button
  padding: 3px 12px
  border: 0
  border: 1px solid rgba(black, 0.3)
  border-radius: 10px
  background: none
  cursor: pointer
  transition: 0.3s
  &:focus
    outline: none
  &:hover
    background-color: rgba(black, 0.1)

*
  // border: 1px solid #000

#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  padding: 60px 0
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  color: #2c3e50
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column

.page-enter-active, .page-leave-active
  transition: 0.5s
.page-enter, .page-leave-to
  opacity: 0
</style>
