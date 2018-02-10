import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import App from './App.vue'
import router from './router'
import store from './store'
import filters from './filters'

Vue.use(MuseUI)

Vue.config.productionTip = false

Object.keys(filters).forEach(k => Vue.filter(k, filters[k]));

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
