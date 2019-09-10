Vue.component('?', {
    template: ` <div class="alert__block{{classi}}">
                    <p>{{text}}</p>
                </div>`,
    props: ["message", "classi"],
  })

let app = new Vue({
    el: "#app"
})