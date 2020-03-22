<template>
    <div class="bar">
        <p>Felder:</p>
        <div v-for="i in fields" :key="i">
            <button v-on:click="selectField(i.id)">Select</button>
            <div class="line">{{ i.id }}</div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import bus from '../bus.js';

    export default {
        name: "FieldSelect",
        data() {
            return {
                fields: null,
            }
        },
        methods: {
            init: function () {
                this.getAllFields();
            },
            getAllFields: function () {
                axios
                    .get('https://apibt.brickfire.eu/rest/json/field/farmer/id/3ac7e05e-c8df-4959-b28e-a6ab65595c50?loginId=622b216c-0eb7-4e09-87da-454f48de8dc7&loginToken=QnGXYPTGTosU6dYifG4JnJvH145kfbAj')
                    .then(response => (this.fields = Object.assign({}, response.data)))
                    .catch(error => {
                        console.log(error)
                        this.errored = true
                    });
            },
            selectField: function (id) {
                localStorage.currentField = id;
                bus.bus.$emit('fieldChanged',);
            }
        },
        beforeMount() {
            this.init();
        },
    }
</script>

<style scoped>
    .bar{
        width: 400px;
        border-width: 1px;
        border-color: black;
        border-style: solid;
        padding: 5px;
    }

    .line{
        display: inline-block;
        padding-left: 3px;
        padding-top: 5px;
    }
</style>
