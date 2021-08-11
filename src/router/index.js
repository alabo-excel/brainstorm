import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Universities from '../views/postAuth/Universities.vue'
import Courses from '../views/postAuth/Courses.vue'
import Settings from '../views/postAuth/Settings.vue'
import Search from '../views/postAuth/Search.vue'
import Science from '../views/postAuth/Science.vue'
import Arts from '../views/postAuth/Arts.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/universities',
    name: 'Universities',
    component: Universities
  },
  {
    path: '/courses',
    name: 'Courses',
    component: Courses
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/courses/arts',
    name: 'Arts',
    component: Arts
  },
  {
    path: '/courses/science',
    name: 'Science',
    component: Science
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
