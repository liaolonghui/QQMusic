import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MyMusic from '../views/MyMusic.vue'
import Music from '../views/Music.vue'
import Login from '../views/Login.vue'
import Download from '../components/other/Download.vue'
import Singer from '../components/home/Singer.vue'
import NewMusic from '../components/home/NewMusic.vue'
import Top from '../components/home/Top.vue'
import Sort from '../components/home/Sort.vue'
import TV from '../components/home/TV.vue'
import Album from '../components/home/Album.vue'
import HomePage from '../components/home/HomePage.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/home',
        name: 'Music',
        component: Music,
        children: [
          { path: '/home', name: 'HomePage', component: HomePage },
          { path: '/home/singer', name: 'Singer', component: Singer },
          { path: '/home/newMusic', name: 'NewMusic', component: NewMusic },
          { path: '/home/top', name: 'Top', component: Top },
          { path: '/home/sort', name: 'Sort', component: Sort },
          { path: '/home/tv', name: 'TV', component: TV },
          { path: '/home/album', name: 'Album', component: Album }
        ]
      },
      // ...
      { path: '/user', name: 'MyMusic', component: MyMusic },
      { path: '/download', name: 'Download', component: Download },
      { path: '/open', name: 'open', component: Download },
      { path: '/vip', name: 'vip', component: Download }
    ]
  },
  // login
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router