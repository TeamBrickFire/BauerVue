<template>
    <div id="login">
        <div class="jumbotron">
            <h1 class="display-4">Login</h1>
        </div>
        <div class="container">

            <p>{{ info }}</p>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {
                info: null,
            }
        },
        mounted () {
            axios
                .post('https://apibt.brickfire.eu/rest/json/person/login', {
                    "email": "max9@test.com", "password": "1234"
                })
                .then(response => (this.info = response))
                .catch(error => {
                    console.log(error)
                    this.errored = true
                })

        },
    }
</script>
