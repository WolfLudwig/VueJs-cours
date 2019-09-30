<template>
  <div id="app">
      <h1>
        Coucou
      </h1>
      <Alert message="ok"></Alert>
  </div>
</template>

<script>
import Alert from "./components/Alert.vue"
export default {
    name:"app",
    components:{
      Alert
    }
}
</script>
<style lang="scss">
  $color:red;
  $ombre: 5px 5px white;
  h1 {
    background-color: $color;
    text-shadow: $ombre;
  }
</style>