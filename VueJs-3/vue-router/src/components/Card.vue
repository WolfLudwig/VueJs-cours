<template>
    <div class="card">
        <h2 class="card__title"> {{ cardtitle }} </h2>
        <p class="card__content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum magni quasi dolores quam, culpa nihil!
        </p>
        <button class="card__link" @click="changeTitle" >En savoir plus!</button>
    </div>
</template>
<script>
export default {
    name: "card",
    props:["cardtitle"],
    methods:{
        changeTitle: function(){
            this.$emit("cardtitle", this.cardtitle)
        }
    }
}
</script>
<style lang="scss">
.card{
    width: 30%;
    margin:1em;
    border: 1px solid black;
    border-radius: 15px 0
}
.card__title{
    color: white;
    background-color: black;
}
.card__text{
    text-align: justify;
}
</style>