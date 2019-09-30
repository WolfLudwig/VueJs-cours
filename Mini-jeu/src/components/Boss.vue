<template>
    <div class="boss">
        <img src="../assets/boss.png" alt="Boss" @click='youfool'>
        <h2>Formortiis</h2>
        <div>
            <span class="remaining-points">{{rPoints}}</span>
            <span class="life-points">/{{lPoints}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: "Boss",
    computed:{
        lPoints: function(){
        return this.$store.state.lifePoints;
        },
        rPoints: function(){
        return this.$store.state.remainingPoints;
        },
    },
    methods:{
        youfool: function()
        {
        this.$store.dispatch("itsUseless");
        },
    }
}
</script>