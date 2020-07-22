import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import(/* webpackChunkName: "project" */ '../Login.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () =>
      import(/* webpackChunkName: "project"  */ '../views/Home.vue'),
    children: [
      {
        path: '/one',
        name: 'One',
        component: () =>
          import(/* webpackChunkName: "project"*/ '../views/One.vue')
      },
      {
        path: '/twoone',
        name: 'Twoone',
        component: () =>
          import(/* webpackChunkName: "project"*/ '../views/two/Twoone.vue')
      },
      {
        path: '/twotwo',
        name: 'Twotwo',
        component: () =>
          import(/* webpackChunkName: "project"*/ '../views/two/Twotwo.vue')
      },
      {
        path: '/threeone',
        name: 'Threeone',
        component: () =>
          import(/* webpackChunkName: "project"*/ '../views/three/Threeone.vue')
      },
      {
        path: '/threetwo',
        name: 'Threetwo',
        component: () =>
          import(/* webpackChunkName: "project"*/ '../views/three/Threetwo.vue')
      }
    ]
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: () =>
  //     import(/* webpackChunkName: "project" */ '../views/About.vue'),
  //   children: []
  // },
  {
    path: '*',
    name: 'Login',
    component: () => import(/* webpackChunkName: "project" */ '../Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
