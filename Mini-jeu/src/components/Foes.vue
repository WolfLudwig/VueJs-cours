<template>
    <div class="foes">
        <Boss></Boss>
        <Minions></Minions>
        <Minions></Minions>
        <Minions></Minions>
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
.foes{
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: space-around;
    flex-direction: row-reverse;
}

</style>