<template>
    <div class="farmfields">
        <div class="field-row" v-bind:key="fieldy" v-for="(fieldy, indexY) in fields">
            <template v-for="(fieldx, indexX) in fieldy">
                <span v-on:click="changeField(indexX, indexY)" class="farm-field harvestable" v-bind:key="fieldx" v-if="fieldx[0] === 0"/>
                <span v-on:click="changeField(indexX, indexY)" class="farm-field harvested" v-bind:key="fieldx" v-else/>
            </template>
            <span v-if="editable" v-on:click="addField(indexY, 1)" class="farm-field clickable"
                  style="background-color: orange;"><i class="fa fa-plus farm-field-element"
                                                       aria-hidden="true"/></span>
            <span v-if="editable" v-on:click="addField(indexY, 0)" class="farm-field clickable"
                  style="background-color: green;"><i class="fa fa-plus farm-field-element" aria-hidden="true"/></span>
        </div>
        <span v-if="editable" v-on:click="addFieldRow" class="farm-field clickable" style="background-color: green;"><i
                class="fa fa-plus farm-field-element" aria-hidden="true"/></span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                fields: [[[0], [1], [0]]],
                editable: true,
                highestFieldType: 1,
            }
        },
        props: {
            fieldID: String,
            readonly: String,
        },
        methods: {
            addFieldRow: function () {
                this.fields.push([]);
            },
            addField: function (y, b) {
                this.fields[y].push([b]);
            },
            init: function () {
                if (this.readonly === "true") {
                    this.editable = false;
                }
            },
            changeField: function (x, y) {
                this.fields[y][x]++;
                if (this.fields[y][x] > this.highestFieldType) {
                    this.fields[y][x] = 0;
                } //rendern
            }
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
