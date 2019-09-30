<template>
    <div class="alert" :class="{'alert-success':change,'alert-primary':!change}">
           <p @click="color">
               {{help}} {{message}}
           </p>
    </div>
</template>

<script>
export default {
    name: "Alert",
    props:["message"],
    data: function()
    {
        return{
            help: "Besoin d'aide?",
            change: false
        }
    },
    methods:{
        color: function(){
            this.change = !this.change
        }
    }
}
</script>

<style lang="scss">
        .alert {
        position: relative;
        padding: .75rem 1.25rem;
        margin-bottom: 1rem;
        border: 1px solid transparent;
        border-radius: .25rem;
    }
    .alert-primary {
        color: #004085;
        background-color: #cce5ff;
        border-color: #b8daff;
    }
    .alert-success {
        color: #1b8500;
        background-color: #d6ffcc;
        border-color: #beffb8;
    }
</style>