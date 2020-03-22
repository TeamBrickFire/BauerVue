<template>
    <div class="farmfields">
        <div class="field-row" :key="x" v-for="(x, xIndex) in f2">
            <!-- Green button too add new fields in a row  -->
            <span v-if="editable" v-on:click="addField(xIndex, false)" class="farm-field clickable" style="background-color: green;">
                <i class="fa fa-plus farm-field-element" aria-hidden="true"/>
            </span>

            <!-- Yellow button too add new fields in a row  -->
            <span v-if="editable" v-on:click="addField(xIndex, true)" class="farm-field clickable" style="background-color: orange;">
                <i class="fa fa-plus farm-field-element" aria-hidden="true"/>
            </span>
                <template  v-for="(y, yIndex) in x">
                    <template v-for="z in y">
                        <!--  Green or yellow field drawing -->
                        <span v-on:click="changeField(xIndex, yIndex)" class="farm-field harvestable" v-bind:key="z" v-if="z === false"/>
                        <span v-on:click="changeField(xIndex, yIndex)" class="farm-field harvested" v-bind:key="z" v-else/>
                    </template>
                </template>
        </div>
        <!--  Green button at the bottom to create a new row  -->
        <span v-if="editable" v-on:click="addFieldRow" class="farm-field clickable" style="background-color: green;">
            <i class="fa fa-plus farm-field-element" aria-hidden="true"/>
        </span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                f2: {0: {0 : {"blocked": false}, 1 : {"blocked": true}, 2 : {"blocked": true}, 3 : {"blocked": false}}, 1: {0 : {"blocked": false}, 1 : {"blocked": false}, 2 : {"blocked": true}}},
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
                let key = Object.keys(this.f2).length;

                let d = Object.assign({}, this.f2);
                d[key] = {"0" : {"blocked": false} };
                this.f2 = d;
            },
            addField: function (y, b) {
                let key = Object.keys(this.f2[y]).length;
                console.log(this.f2);
                let d = Object.assign({}, this.f2);
                d[y][key] = {"blocked": b};
                this.f2 = d;
            },
            init: function () {
                if (this.readonly === "true") {
                    this.editable = false;
                }
            },
            changeField: function (x, y) {
                if(this.editable) {
                    let d = Object.assign({}, this.f2);
                    d[x][y]["blocked"] = !d[x][y]["blocked"];
                    this.f2 = d;
                }
            },
        },
        beforeMount() {
           this.init();
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .farm {
    }

    .farm-field {
        display: inline-table;
        height: 40px;
        width: 40px;
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

    div.field-row {
        display: table-row;
    }
</style>
