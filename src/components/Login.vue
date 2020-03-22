<template>
    <div id="login">
        <div class="jumbotron">
            <h1 class="display-4">Login</h1>
        </div>
        <div class="container">
            <div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" placeholder="E-Mail-Adresse">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Passwort</label>
                    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Passwort">
                </div>
                <button v-on:click="login" class="btn btn-primary">Login</button>
            </div>
            <p v-if="res1">Token: {{ res1.data.token }}</p>

        </div>
    </div>
</template>

<script>
    import axios from 'axios';
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
                    .then(response => (this.res1 = response))
                    .catch(error => {
                        console.log(error)
                        this.errored = true
                    });
                this.token = this.res1.data.token;
                this.$forceUpdate()
            }
        },

    }
</script>
