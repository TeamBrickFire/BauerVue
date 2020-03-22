<template>
    <div class="farmfields">


        <div class="field-row" :key="x" v-for="(x, xIndex) in field" >
            <!-- Green button too add new fields in a row  -->
            <span v-if="editable" v-on:click="addField(xIndex, false)" class="farm-field clickable"
                  style="background-color: green;">
                <i class="fa fa-plus farm-field-element" aria-hidden="true"/>
            </span>

            <!-- Yellow button too add new fields in a row  -->
            <span v-if="editable" v-on:click="addField(xIndex, true)" class="farm-field clickable"
                  style="background-color: orange;">
                <i class="fa fa-plus farm-field-element" aria-hidden="true"/>
            </span>
            <span class="farm-field empty" v-if="editable"/>
            <template v-for="(y, yIndex) in x">
<!--                <template >-->
                    <!--  Green or yellow field drawing -->
                    <span :key="y.blocked" v-on:click="changeField(xIndex, yIndex)" class="farm-field harvestable"
                          v-if="y.blocked === false"/>
                    <span :key="y.blocked" v-on:click="changeField(xIndex, yIndex)" class="farm-field harvested" v-else/>
<!--                </template>-->
            </template>
        </div>
        <!--  Green button at the bottom to create a new row  -->
        <span v-if="editable" v-on:click="addFieldRow" class="farm-field clickable" style="background-color: green;">
            <i class="fa fa-plus farm-field-element" aria-hidden="true"/>
        </span>
        <div>
            <b-button v-on:click="setSquares">Speichern</b-button>
        </div>

        <h4>Feld einstellen</h4>
        <div>
            <b-input-group prepend="Art der Pflanze">
                <b-form-input type="text" />
            </b-input-group>
            <b-input-group prepend="Zeitraum">
                <b-form-input type="text" />
            </b-input-group>
            <b-input-group prepend="Helferanzahl">
                <b-form-input type="text" />
            </b-input-group>
        </div>
    </div>


</template>

<script>
    import axios from "axios";
    import {bus} from '../bus.js';

    export default {
        data() {
            return {
                field: null,
                editable: true,
                highestFieldType: 2,
            }
        },
        props: {
            fieldID: String,
            readonly: String,
        },
        methods: {
            addFieldRow: function () {
                let key = Object.keys(this.field).length;

                let d = Object.assign({}, this.field);
                d[key] = {"0": {"blocked": false}};
                this.field = d;
            },
            addField: function (y, b) {
                let key = Object.keys(this.field[y]).length;

                let d = Object.assign({}, this.field);
                d[y][key] = {"blocked": b};
                this.field = d;
            },
            init: function () {
                if (this.readonly === "true") {
                    this.editable = false;
                }

                this.getSquares();
            },
            changeField: function (x, y) {
                if (this.editable) {
                    let d = Object.assign({}, this.field);
                    d[x][y]["blocked"] = !d[x][y]["blocked"];
                    this.field = d;
                }
            },
            getSquares: function () {

                console.log("gs " + localStorage.currentField)
                if (localStorage.currentField) {
                    axios
                        .get('https://apibt.brickfire.eu/rest/json/field/squares/' + localStorage.currentField + '?loginId=' + localStorage.id + '&loginToken=' + localStorage.token)
                        .then(response => (this.field = Object.assign({}, response.data)))
                        .catch(error => {
                            console.log(error)
                            this.errored = true
                        });
                }
            },
            setSquares: function () {
                console.log("ss " + localStorage.currentField)
                if (localStorage.currentField) {
                    axios
                        .post('https://apibt.brickfire.eu/rest/json/field/setSquares/' + localStorage.currentField + '?loginId=' + localStorage.id + '&loginToken=' + localStorage.token, this.field)
                        .catch(error => {
                            console.log(error)
                            this.errored = true
                        });
                }
            }
        },
        beforeMount() {
            this.init();
            bus.$on('fieldChanged', () => {
                this.getSquares();
            })
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .farmfields {
        display: table;
    }

    div.field-row {
        display: table-row;
        height: 45px;
    }

    .farm-field {
        width: 45px;
        display: inline-table;
        height: 100%;
        background-color: grey;
        text-align: center;
        transition: 0.3s;
        opacity: 0.8;
    }

    .farm-field-element {
        display: table-cell;
        margin: auto;
        vertical-align: middle;
    }

    .farm-field-element.fa {
        font-size: 25px;
    }

    .farm-field.clickable {
        opacity: 0.7;
    }

    .farm-field.clickable:hover {
        opacity: 1;
    }

    .farm-field.harvestable {
        background-color: green;
    }

    .farm-field.harvested {
        background-color: orange;
    }

    .farm-field.unset {
        background-color: grey;
    }

    .farm-field.empty {
        background-color: transparent;
    }
</style>
