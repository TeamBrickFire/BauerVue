import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import auth from './auth'
import FieldApp from './components/FieldApp.vue'
import FieldHelperApp from './components/FieldHelperApp.vue'
import Login from './components/Login.vue'
import Track from './components/Track.vue'
import Register from './components/Register.vue'


Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(VueRouter)

Vue.config.productionTip = false


function requireAuth (to, from, next) {
  if (!auth.loggedIn()) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', component: FieldHelperApp },
    { path: '/f', component: FieldHelperApp },
    { path: '/ff', component: FieldApp, beforeEnter: requireAuth },
    { path: '/track', component: Track },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/logout',
      beforeEnter (to, from, next) {
        auth.logout()
        next('/login')
      }
    }
  ]
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
