<template>
  <div class="pomodoro">
    <h1>Pomodoro!</h1>
    <img src="../assets/tomato.jpeg" alt="Tomate">
      <!-- Timer -->
    <div id="timer">
      <span id="minutes">{{minutes}}</span>
      <span id="middle">:</span>
      <span id="seconds">{{seconds}}</span>
    </div>

    <!-- Start Timer -->
    <button id="start" v-if="!timer" @click="startTimer">Start</button>

    <!-- Pause Timer -->
    <button id="stop" v-if="timer" @click="stopTimer">Pause</button>
  </div>
</template>

<script>
export default {
    name: "pomodoro",
    data: function()
    {
        return {
            timer: null,
            totalTime: (25 * 60),
            restartButton: false,
            title: "Déjà vu!",
            minutes: 25,
            seconds: 0
        }
    },
    methods:{
        // Fonction start
        startTimer: function() {
            this.timer = setInterval(this.countdown, 1000);
            this.restartButton = true;
        },
        // Fonction pause
        stopTimer: function(){
            clearInterval(this.timer);
            this.timer = null;
            this.restartButton = false;
        },
        //fonction pour le temps restant
        countdown: function() {
            this.totalTime--;
            this.minutes = Math.floor(this.totalTime / 60);
            this.seconds = this.totalTime - this.minutes*60;
        }
    },
    computed:{
    }
}
</script>
<style>
#timer{
  font-size: 2.5rem;
  font-weight: bold;
}
body{
  background-color: red;
}
</style>