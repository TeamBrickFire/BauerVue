<template>
    <div id="farmerApp">
        <div class="jumbotron">
            <h1 class="display-4">ErnteHelferApp</h1>
        </div>
        <div class="container">
            <h3>Feld vom Bauer</h3>
            <h4>Feld aus Ansicht des Helfers</h4>
            <FarmFields fieldID="123" readonly="true"/>
        </div>
    </div>
</template>

<script>
    import FarmFields from "@/components/FarmFields";
    export default {
        components: {FarmFields},
    }
</script>
