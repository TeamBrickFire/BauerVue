<template>
    <div id="farmerApp">
        <div class="jumbotron">
            <h1 class="display-4">BauerApp</h1>
        </div>
        <div class="container">
            <h3>Feld von dir</h3>
            <h4>Feld aus Ansicht des Bauers</h4>
            <FarmFields fieldID="123" readonly="false"/>
        </div>
    </div>
</template>

<script>
    import FarmFields from "@/components/FarmFields";
    export default {
        components: {FarmFields},
    }
</script>
