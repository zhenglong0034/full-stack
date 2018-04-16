<template>
  <div id="app">
    <img src="./assets/wx.png" style="border-radius: 50%" width="100px" height="100px">
    <router-link to="/index">index</router-link>
    <router-link to="/login">login</router-link>
    <router-link to="/todo">todo</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
