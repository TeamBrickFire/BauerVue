<template>
    <div id="login">
        <div class="jumbotron">
            <h1 class="display-4">Login</h1>
        </div>
        <div class="container">
            <div>
                <div class="form-group">
                    <label for="exampleInputEmail1">E-Mail-Adresse</label>
                    <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" placeholder="E-Mail-Adresse">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Passwort</label>
                    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Passwort">
                </div>
                <button v-on:click="login" class="btn btn-primary" :disabled="!(email && password)">Login</button>
            </div>

        </div>
    </div>
</template>

<script>
    import auth from '../auth'
    import axios from 'axios';
    import {bus} from '../bus.js';

    export default {
        data() {
            return {
                res1: null,
                email: null,
                password: null,
                token: null,
            }
        },
        methods: {
            login: function () {
                axios
                    .post('https://apibt.brickfire.eu/rest/json/person/login', {
                        "email": this.email, "password": this.password
                    })
                    .then(response => {
                        this.res1 = response;
                        this.token = this.res1.data.token;
                        localStorage.token = this.res1.data.token;
                        localStorage.id = this.res1.data.id;
                        window.location.pathname = '/';
                        bus.$emit('updateFarmerState');
                    })
                    .catch(error => {
                        console.log(error)
                        this.errored = true
                    });
            },
            getToken: function () {
                return auth.getToken();
            }
        },

    }
</script>
