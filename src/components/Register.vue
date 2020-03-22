<template>
    <div id="register">
        <div class="jumbotron">
            <h1 class="display-4">Registrieren als Bauer</h1>
        </div>
        <div class="container">
            <div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email-Adresse</label>
                    <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" placeholder="E-Mail-Adresse">
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Passwort</label>
                    <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Passwort">
                </div>
                <button v-on:click="register" class="btn btn-primary">Login</button>
                <p v-if="this.token">Token: {{ getToken() }}</p>
            </div>

        </div>
    </div>
</template>

<script>
    import auth from '../auth'
    import axios from 'axios';
    export default {
        name: "Register",
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
                    .post('https://apibt.brickfire.eu/rest/json/person/register', {
                        "email": this.email, "password": this.password
                    })
                    .then(response => (this.res1 = response))
                    .catch(error => {
                        console.log(error)
                        this.errored = true
                    });
                this.token = this.res1.data.token;
                localStorage.token = this.res1.data.token;
            },
            getToken: function () {
                return auth.getToken();
            }
        },

    }
</script>

<style scoped>

</style>
