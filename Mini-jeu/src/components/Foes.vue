<template>
    <div class="boss">
        <Boss></Boss>
        <div class="pack">
            <Minions></Minions>
            <Minions></Minions>
            <Minions></Minions>
        </div>
    </div>
</template>
<script>
import Boss from './Boss.vue'
import Minions from './Minions.vue'

export default {
    name: "Foes",
    components:{
        Boss,
        Minions
    }
}
</script>

<style>
.pack{
    display: flex;
    justify-content: space-around
}
</style>