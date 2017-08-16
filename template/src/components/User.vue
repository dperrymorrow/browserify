<template>
  <div id="user">
    <img src="http://vuejs.org/images/logo.png">
    <h1>
      Welcome to Your Portal Vue.js App
      <small>User retrieved from SDK</small>
    </h1>
    <pre>{{ user }}</pre>
  </div>
</template>

<script>
import SDK from "@welocalize/pantheon-api-sdk";

export default {
  name: "user",
  data() {
    return {
      user: null,
    };
  },

  created() {
    // on create, fetch the currently logged user
    SDK.userShow(SESSION.decoded.principal)
      .then(user => {
        this.user = user;
      })
      .catch(err => {
        console.error(err);
      });
  },
};
</script>

<style lang="stylus" scoped>
#user
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #666
  font-family: Helvetica
  padding: 4em
  text-align: center

  img
    max-width: 100px

  pre
    text-align: left
    background-color: #ccc
    padding: 1em
    color: #666
    font-size: 1em
    max-height: 600px
    overflow-y: auto
    border-radius: .5em
    font-family: Monaco
</style>
