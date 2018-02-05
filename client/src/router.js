import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import UserList from './views/UserList.vue'
import UserDetail from './views/UserDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login,
    },
    {
      path: '/userlist',
      name: 'userList',
      component: UserList,
    },
    {
      path: '/userdetail/:id',
      name: 'userDetail',
      component: UserDetail,
    },
  ]
})
