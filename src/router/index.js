import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior: function(to) {
    if (to.hash) {
        return { selector: to.hash }
    } else {
        return { x: 0, y: 0 }
    }
  },
})

export default router
