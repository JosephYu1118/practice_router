<template lang="pug">
nav
  router-link.link(to="/") Home
  router-link.link(to="/user/Joseph") Joseph
  router-link.link(to="/user/Windy") Windy
  router-link.link(to="/user/id/1") User 01
  router-link.link(to="/user/id/2") User 02
</template>

<script>
export default {

}
</script>

<style lang="sass">
nav
  margin: 20px 0
  .link
    margin: 0 10px
</style>
