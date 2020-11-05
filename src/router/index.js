import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../views/Profile.vue'
import HomePage from '../views/HomePage.vue'
import Register from '../views/Register.vue'
import About from '../views/About.vue'
import SignIn from '../views/SignIn.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
    children: [
      {
        name: "About",
        path: "/about",
        component: About
      },
      {
        path: '/register',
        name: 'Register',
        component: Register
      },
      {
        path: '/signin',
        name: 'Sign In',
        component: SignIn
      }
    ]
  },
  {
    path: '/profile/:id',
    name: 'Profile',
    component: Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
