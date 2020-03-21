<template>
  <div id="app">
    <FieldApp farmer="Bauer1"/>
  </div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

import FieldApp from './components/FieldApp.vue'

export default {
  name: 'App',
  components: {
    FieldApp
  }
}
</script>

<style>

</style>
