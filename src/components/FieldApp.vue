<template>
    <div id="farmerApp">
        <div class="jumbotron">
            <h1 class="display-4">FarmApp</h1>
        </div>
        <div class="container">
            <h3>Feld von {{ farmer }}</h3>
            <h4>Feld ohne schreibberechtigung</h4>
            <FarmFields fieldID="123" readonly="true"/>
            <h4>Feld mit schreibberechtigung</h4>
            <FarmFields fieldID="123" readonly="false"/>
        </div>
    </div>
</template>

<script>
    import FarmFields from "@/components/FarmFields";
    export default {
        components: {FarmFields},
        el: '#farmerApp',
        data() {
        },
        props: {
            farmer: String,
        },
    }
</script>
