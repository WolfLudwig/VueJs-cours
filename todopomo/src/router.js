import Vue from 'vue'
import Router from 'vue-router'
import Todo from './views/Todo.vue'
import Pomodoro from './views/Pomodoro.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        name: 'todo',
        component: Todo
      },
      {
        path: '/pomodoro',
        name: 'pomodoro',
        component: Pomodoro
      },
      
    ]
  })