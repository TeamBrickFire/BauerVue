<template>
    <div id="farmerApp">
        <div class="jumbotron">
            <h1 class="display-4">BauerApp</h1>
        </div>
        <div class="container">
            <FieldSelect class="sidebar"/>
            <div>
                <h3>Feld von dir</h3>
                <h4>Feld aus Ansicht des Bauers</h4>
                <FarmFields fieldID="123" readonly="false"/>
            </div>

        </div>
    </div>
</template>

<script>
    import FarmFields from "@/components/FarmFields";
    import FieldSelect from "./FieldSelect";
    export default {
        components: {FieldSelect, FarmFields},
    }
</script>

<style scoped>
    .container{
        position: relative;
        left: 100px;
    }

    .sidebar {
        position: absolute;
        left: -425px;
    }
</style>
