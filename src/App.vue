<template>
    <div id="app">
        <div>
            <b-navbar toggleable="lg" type="light">
                <b-navbar-brand>BT</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"/>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item><router-link to="/login">Login</router-link></b-nav-item>
                        <b-nav-item><router-link to="/ff">Felder (als Bauer)</router-link></b-nav-item>
                        <b-nav-item><router-link to="/f">Felder (als Erntehelfer)</router-link></b-nav-item>
                        <b-nav-item><router-link to="/track">GPS Track</router-link></b-nav-item>
                        <b-nav-item><router-link to="/logout">Logout</router-link></b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </b-navbar>
        </div>
        <router-view/>
    </div>
</template>

<script>

    export default {
        name: 'App',
        components: {},

    }
</script>

<style>

</style>
