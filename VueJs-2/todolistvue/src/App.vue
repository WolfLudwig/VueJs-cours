<template>
  <div id="container">
      <h1>Coucou! on va galérer ensemble :D</h1>
      <Task></Task>
  </div>
</template>

<script>
import List from "./components/List.vue"
import Task from "./components/Task.vue"

export default {
    name:"app",
    components:{
      Task,
      List
    }
}
</script>
<style lang="scss">
  
  
</style>