<template>
    <div id="farmerApp">
        <div class="jumbotron">
            <h1 class="display-4">ErnteHelferApp</h1>
        </div>
        <div class="container">
            <h3>Feld von {{ farmer }}</h3>
            <h4>Feld aus Ansicht des Helfers</h4>
            <FarmFields fieldID="123" readonly="true"/>
            <h4>Feld aus Ansicht des Bauers</h4>
            <FarmFields fieldID="123" readonly="false"/>
        </div>
    </div>
</template>

<script>
    import FarmFields from "@/components/FarmFields";
    export default {
        components: {FarmFields},
        props: {
            farmer: String,
        },
    }
</script>
