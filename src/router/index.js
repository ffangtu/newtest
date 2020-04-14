import Vue from 'vue'
import VueRouter from 'vue-router'
import define from './define'

const { Home, Child } = define

Vue.use(VueRouter)

Home.children = [Child]

const routes = [
  Home
]

const router = new VueRouter({
  routes
})

export default router
