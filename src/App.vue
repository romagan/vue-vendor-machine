<template>
    <div class="page">
        <showcase></showcase>
        <panel></panel>
    </div>
</template>

<script>
    import Showcase from './components/Showcase.vue';
    import Panel from './components/Panel.vue';

    export default {
        name: 'App',
        components: {
            Showcase,
            Panel
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>