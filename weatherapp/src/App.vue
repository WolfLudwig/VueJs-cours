<template>
  <div id="app">
    <!-- <bitcoin></bitcoin>  -->

    <!-- <Weather></Weather> -->
    <Weather5></Weather5>
  </div>
</template>

<script>
import Bitcoin from './components/Bitcoin.vue';
import Weather from './components/Weather.vue';
import Weather5 from './components/Weather5.vue'

export default {
  name: 'app',
  components: {
    Bitcoin,
    Weather,
    Weather5
  }
}
</script>
