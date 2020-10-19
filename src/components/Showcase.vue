<template>
    <div class="page__showcase">
        <div class="page__showcase-body">
            <products></products>
        </div>
    </div>
</template>

<script>
    import Products from './Products.vue';

    export default {
        name: 'Showcase',
        components: {
            Products
        },
        props: {
            msg: String
        }
    }
</script>
