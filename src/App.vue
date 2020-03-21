<template>
    <div id="app">
        <FieldApp farmer="Bauer1"/>
        <Login/>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'

    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'

    import FieldApp from './components/FieldApp.vue'
    import Login from "@/components/Login";

    Vue.use(BootstrapVue)
    Vue.use(BootstrapVueIcons)


    export default {
        name: 'App',
        components: {
            Login,
            FieldApp
        },

    }
</script>

<style>

</style>
