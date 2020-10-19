<template>
    <div :class="[`product`, isActiveClass]">
        <span class="product__name">{{ product.title }}</span>
        <span class="product__desc">{{ product.desc }}</span>
        <span class="product__price">{{ price }}</span>
        <span class="product__id">{{ product.id }}</span>
    </div>
</template>
        
<script>
    import { mapGetters } from 'vuex';

    export default {
        name: `Product`,
        components: {
            
        },
        props: {
            product: Object
        },
        data() {
            return {
                
            }
        },
        computed: {
            ...mapGetters('banknotes', {
                sum: 'sum'
            }),
            price() {
                return `${this.product.price} ₽`;
            },
            isActiveClass() {
                return this.sum >= parseInt(this.product.price, 10) ? `product_active` : ``;
            }
        },
        mounted() {
            
        },
        methods: {
            
        }
    }
</script>