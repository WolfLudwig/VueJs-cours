<template>
    <div class="weather5">
        <!-- https://api.openweathermap.org/data/2.5/forecast?q=Lens&units=metric&APPID=0b7355a417071e91d760514cf7821498 -->
    <h2>La Météooooooo</h2>
    <h3>
        {{info.city.name}}
    </h3> 
    <table>
        <tr>
            <td>Date</td>
            <td>
                {{info.list[0].dt_txt}}
            </td>
            <td>
                {{info.list[7].dt_txt}}
            </td>
            <td>
                {{info.list[15].dt_txt}}
            </td>
            <td>
                {{info.list[23].dt_txt}}
            </td>
            <td>
                {{info.list[31].dt_txt}}
            </td>
            <td>
                {{info.list[39].dt_txt}}
            </td>
        </tr>
    	<tr>
            <td>Température</td>
            <td>
                {{info.list[0].main.temp}}°C
            </td>
            <td>
                {{info.list[7].main.temp}}°C
            </td>
            <td>
                {{info.list[15].main.temp}}°C
            </td>
            <td>
                {{info.list[23].main.temp}}°C
            </td>
            <td>
                {{info.list[31].main.temp}}°C
            </td>
            <td>
                {{info.list[39].main.temp}}°C
            </td>
        </tr>
        <tr>
            <td>Temps</td>
            <td>
                <img :src="weatherincon1" alt="">
                {{info.list[0].weather[0].description}}
            </td>
            <td>
                <img :src="weatherincon2" alt="">
                {{info.list[7].weather[0].description}}
            </td>
            <td>
                <img :src="weatherincon3" alt="">
                {{info.list[15].weather[0].description}}
            </td>
            <td>
                <img :src="weatherincon4" alt="">
                {{info.list[23].weather[0].description}}
            </td>
            <td>
                <img :src="weatherincon5" alt="">
                {{info.list[31].weather[0].description}}
            </td>
            <td>
                <img :src="weatherincon6" alt="">
                {{info.list[39].weather[0].description}}
            </td>
        </tr>  
    	
    </table>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: "Weather5",
    data: function(){
        return {
            info: null,
        }
    },
    computed: {
        weatherincon1:function()
        {
        return this.info ? 'https://openweathermap.org/img/wn/'+ this.info.list[0].weather[0].icon +'@2x.png' : '';
        },
        weatherincon2:function()
        {
        return this.info ? 'https://openweathermap.org/img/wn/'+ this.info.list[7].weather[0].icon +'@2x.png' : '';
        },
        weatherincon3:function()
        {
        return this.info ? 'https://openweathermap.org/img/wn/'+ this.info.list[15].weather[0].icon +'@2x.png' : '';
        },
        weatherincon4:function()
        {
        return this.info ? 'https://openweathermap.org/img/wn/'+ this.info.list[23].weather[0].icon +'@2x.png' : '';
        },
        weatherincon5:function()
        {
        return this.info ? 'https://openweathermap.org/img/wn/'+ this.info.list[31].weather[0].icon +'@2x.png' : '';
        },
        weatherincon6:function()
        {
        return this.info ? 'https://openweathermap.org/img/wn/'+ this.info.list[39].weather[0].icon +'@2x.png' : '';
        },
    },
    created(){
        axios
            .get("https://api.openweathermap.org/data/2.5/forecast?q=Lens&units=metric&APPID=0b7355a417071e91d760514cf7821498")
            .then(response => (this.info = response.data))
    }
}
</script>
<style>
h3{
    font-weight: bold;
    text-align: center;
}
table,
td,
tr{
    border: 1px black solid;
    border-collapse: collapse;
    text-align: center
}
</style>