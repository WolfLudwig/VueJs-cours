<template>
    <div class="demon">
        <img :src="require(`@/assets/${link}`)" alt="démon" @click='fight'>
        <h3>Demon</h3>
        <div>
            <span class="remaining-points">{{rPoints}}</span>
            <span class="life-points">/{{lPoints}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "Demon",
    props: ['link'],
    computed:{
    lPoints: function(){
      return this.$store.state.lifePoints;
    },
    rPoints: function(){
      return this.$store.state.remainingPoints;
    }
    },
    methods:{
    fight: function()
    {
      this.$store.dispatch("untilDead");
    }
  }

}
</script>