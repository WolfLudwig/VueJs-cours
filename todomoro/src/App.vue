<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">To Do List</router-link> |
      <router-link to="/pomodoro">Pomodoro</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #000000;
    &.router-link-exact-active {
      color: #333333;
    }
  }
}
</style>
