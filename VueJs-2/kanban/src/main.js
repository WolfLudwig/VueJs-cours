import Vue from 'vue'           //importe la librairie Vue
import App from "./App.vue"     //se lie à App.vue

Vue.config.productionTip = false; //met la fonctionnalité de prod

let app = new Vue({               //permet liaison de l'app
  render: h => h(App),
}).$mount("#app")

console.log(Vue)