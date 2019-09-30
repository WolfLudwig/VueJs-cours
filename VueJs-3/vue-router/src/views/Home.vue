<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1> {{ Title }}</h1>
    <div class="container">
      <Card @cardtitle="setTitle" cardtitle="ça marche"/>
      <Card @cardtitle="setTitle" cardtitle="la tête"/>
      <Card @cardtitle="setTitle" cardtitle="Owiiii"/>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'

export default {
  name: 'home',
  data: function(){
    return {
      Title: "Bonjour",
    }
  },
  components: {
    Card
  },
  methods:{
    setTitle: function(cardtitle){
      this.Title = cardtitle
    }
    }
}
</script>
<style lang="scss">
.container{
  display: flex;
  justify-content: space-around;
}
</style>