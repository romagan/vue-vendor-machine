<template>
    <ul class="product-list">
        <!-- eslint-disable-next-line-->
        <li v-for="product in products" class="product-list__item">
            <product :product="product"></product>
        </li>
    </ul>
</template>
        
<script>
    import { mapGetters } from 'vuex';
    import Product from './Product.vue';

    export default {
        name: `Products`,
        components: {
            Product
        },
        props: {
            
        },
        data() {
            return {
                
            }
        },
        computed: {
            ...mapGetters('products', {
                products: 'items'
            }),
        },
        mounted() {
            
        },
        methods: {
            
        }
    }
</script>