Vue.component('alert', {
    template: ` <div class="alert__block" :class="type">
                    <p>{{message}}</p>
                </div>`,
    props:["message","type"],
  })

let app = new Vue({
    el: "#app"
})