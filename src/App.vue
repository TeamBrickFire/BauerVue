<template>
    <div id="app">
        <div>
            <b-navbar toggleable="lg" type="light">
                <b-navbar-brand>BT</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"/>

                <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item v-if="!getToken()"><router-link to="/login">Login</router-link></b-nav-item>
                    <b-nav-item v-if="getFarmerState()"><router-link to="/ff">Felder (als Bauer)</router-link></b-nav-item>
                    <b-nav-item><router-link to="/f">Felder (als Erntehelfer)</router-link></b-nav-item>
                    <b-nav-item><router-link to="/track">GPS Track</router-link></b-nav-item>
                    <b-nav-item v-if="getToken()"><router-link to="/logout">Logout</router-link></b-nav-item>
                    <b-nav-item v-if="!getToken()"><router-link to="/register">Registrieren</router-link></b-nav-item>
                </b-navbar-nav>
            </b-collapse>
                <div>
                    <p> DEV: Token: {{ getToken() }}</p>
                    <p> DEV: ID: {{ getID() }}</p>
                </div>
            </b-navbar>
        </div>
        <router-view/>
    </div>
</template>

<script>
    import auth from './auth'
    import axios from "axios";
    import {bus} from './bus.js';

    export default {
        name: 'App',
        components: {},
        data() {
            return {
                isFarmer: false,
            }
        },
        methods: {
            getToken: function () {
                return auth.getToken();
            },
            getID: function () {
                return auth.getID();
            },
            getFarmerState: function() {
                console.log("Is Farmer: " + this.isFarmer)

                return this.isFarmer;
            },
            requestFarmerState: function () {
                axios
                    .get('https://apibt.brickfire.eu/rest/json/person/farmer/id/' + localStorage.id + '?loginId=' + localStorage.id + '&loginToken=' + localStorage.token)
                    .then(response => (this.isFarmer = response.data.farmer))
                    .catch(error => {
                        console.log(error)
                        this.errored = true
                    });
            }
        },
        beforeMount() {
            this.requestFarmerState();

            bus.$on('updateFarmerState', () => {
                this.requestFarmerState();
            })
        },
    }
</script>

<style>

</style>
