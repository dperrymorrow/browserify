<template>
  <div id="app">
    <user></user>
  </div>
</template>

<script>
import User from "./components/User.vue";

export default {
  name: "app",
  components: {
    User,
  },
};
</script>

<style lang="stylus" scoped>
// load in any external stylus files you need
@require "stylus/index.styl"
</style>
