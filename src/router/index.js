import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import LogIn from '../components/users/LogIn.vue'
import SignUp from '../components/users/SignUp.vue'
import MyPage from '../components/users/MyPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: LogIn
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/mypage',
    name: 'mypage',
    component: MyPage
  },
]

const router = new VueRouter({
  routes
})

export default router

// コンポーネント記載例
// {
//   path: '/about',
//   name: 'about',
//   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
// },
