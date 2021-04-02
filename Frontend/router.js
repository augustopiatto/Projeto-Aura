import Vue from 'vue'
import Router from 'vue-router'
import Index from '~/pages/index.vue'

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  routes: [
    {path: '/', component: Index, name: 'index'},
  ]
}

export function createRouter (ctx) {
  return new Router(routerOptions)
}
