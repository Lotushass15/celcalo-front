import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueRouter) //Vue2系のvue-routerはrouter/index.jsでルーティング管理を行う。

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
