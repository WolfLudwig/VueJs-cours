<template>
    <div class="weather">
        <!-- https://api.openweathermap.org/data/2.5/weather?q=Lens&units=metric&APPID=0b7355a417071e91d760514cf7821498 -->
    <h2>La Météooooooo</h2>
    <div class="city">
        {{info.name}}
    </div>
    <div class="img">
        <img :src="imgWeather" alt="">
    </div>
    <div class="total">
        <div class="descri">
            {{info.weather[0].description}}
        </div>
        <div class="temp">
            {{info.main.temp}} °C
        </div>
    </div>

    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: "Weather",
    data: function(){
        return {
            info: null,
        }
    },
    computed: {
        imgWeather: function()
        {   
            // if(this.info){
            //     return 'https://openweathermap.org/img/wn/'+ this.info.weather[0].icon +'@2x.png'
            // } else {
            //     return ""
            // }

            return this.info ? 'https://openweathermap.org/img/wn/'+ this.info.weather[0].icon +'@2x.png' : '';
        }
    },
    created(){
        axios
            .get("https://api.openweathermap.org/data/2.5/weather?q=Lens&units=metric&lang=fr&APPID=0b7355a417071e91d760514cf7821498")
            .then(response => (this.info = response.data))
    }
}
</script>
<style>
h2{
    color: #483d8b;
    text-align: center;
}
.city{
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
}
.img{
    text-align: center;
}
.total{
    display: flex;
    justify-content: space-around;
    width: 50%;
    margin: 0 auto;
}
.descri{
    margin: 0.5rem;
    font-style: italic;
    text-transform: capitalize;
}
.temp{
    font-size: 1.8rem;
    font-weight: bold;
    margin: 0.8rem;
}
</style>