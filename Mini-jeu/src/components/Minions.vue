<template>
    <div class="minions">
        <Demon id="red" link="demonrouge.png"></Demon>
        <Demon id="green" link="demonvert.png"></Demon>
        <Demon id="purple" link="demonmauve.png"></Demon>
    </div>
</template>
<script>
import Demon from './Demon.vue'

export default {
    name: "Minions",
    components: {
        Demon
    }
}
</script>

<style>
.minions{
    width: 30%;
    position: relative;
}
#red{
    position: absolute;
    left: 9vw;
    top:12vh;
    color: red;
}
#green{
    position: absolute;
    color: green;
}
#purple{
    position: absolute;
    left:18vw;
    color: purple;
}
</style>