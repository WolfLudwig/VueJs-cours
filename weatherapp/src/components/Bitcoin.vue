<template>
    <div class="bitcoin">
        <h2>Comparaison Bitcoin</h2>

        <div>
            Euro: <span v-if="infos">{{infos.bpi.EUR.rate}}€</span>
        </div>

        <button @click="getInfos">Récupérer les infos</button>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name:"Bitcoin",
    data: function(){
        return {
            infos: null
        }
    },
    methods: {
        getInfos: function(){
            axios
                .get("https://api.coindesk.com/v1/bpi/currentprice.json")
                .then(response => (this.infos = response.data))
        }
    },
    created(){
        axios
            .get("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then(response => (this.infos = response.data))
    }
}
</script>