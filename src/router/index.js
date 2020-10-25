import Vue from 'vue'
import Router from 'vue-router'
import Quiz from '../pages/Quiz'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Quiz
    }
  ]
})