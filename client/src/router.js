import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import UserList from './views/UserList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/userlist',
      name: 'userlist',
      component: UserList
    }
  ]
})
