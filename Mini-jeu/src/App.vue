<template>
  <div id="app">
    <h1>Formortiis Fight!</h1>
    <Foes></Foes>
  </div>
</template>

<script>
import Foes from './components/Foes.vue'

export default {
  name: 'app',
  components: {
    Foes
  },
  computed:{
    count: function(){
      return this.$store.state.count;
    }
  },
  methods:{
    incrementCount: function()
    {
      this.$store.dispatch("itCount");
    }
  }
}
</script>

<style>
body{
  background-image: url('./assets/fond.png');
  background-size: cover;
  background-repeat: no-repeat;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
