<template>
  <div class="todolist">
    <Task/>
  </div>
</template>

<script>
// @ is an alias to /src
import Task from '@/components/Task.vue'

export default {
  name: 'todolist',
  components: {
    Task
  }
}
</script>
