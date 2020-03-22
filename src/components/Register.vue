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
                <div class="form-group">
                    <label for="exampleInputFirstname1">Vorname</label>
                    <input v-model="firstname" type="name" class="form-control" id="exampleInputFirstname1" placeholder="Vorname">
                </div>
                <div class="form-group">
                    <label for="exampleInputName1">Nachname</label>
                    <input v-model="name" type="name" class="form-control" id="exampleInputName1" placeholder="Nachname">
                </div>
                <div class="form-group">
                    <label for="exampleInputPhone1">Handynummer</label>
                    <input v-model="phone" type="number" class="form-control" id="exampleInputPhone1" placeholder="Handynummer">
                </div>
                <button class="btn btn-primary" :disabled="!(email && password)" v-on:click="register">Jetzt Registrieren</button>
                <p v-if="this.token">Token: {{ getToken() }}</p>
            </div>

        </div>
    </div>
</template>

<script>
    import auth from '../auth'
    import axios from 'axios';
    export default {
        data() {
            return {
                res1: null,
                email: null,
                password: null,
                token: null,
                name: null,
                firstname: null,
                phone: null,
            }
        },
        methods: {
            register: function () {
                axios
                    .post('https://apibt.brickfire.eu/rest/json/person/register', {
                        "email": this.email, "password": this.password, "name": this.name, "firstname": this.firstname, "phone": this.phone
                    })
                    .then(response => {
                        (this.res1 = response);
                        this.token = this.res1.data.token;
                        localStorage.token = this.res1.data.token;
                        localStorage.id = this.res1.data.id;
                        window.location.pathname = '/';
                    })
                    .catch(error => {
                        console.log(error);
                        this.errored = true;
                    });
            },
            getToken: function () {
                return auth.getToken();
            }
        },

    }
</script>

<style scoped>

</style>
