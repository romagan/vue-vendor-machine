<template>
    <div class="output">
        <div class="text-board output__text-board">
            <span class="text-board__text">
                {{ status }}
            </span>
        </div>
        <div class="output__bottom">
            <div class="output__output">
                <template v-if="changeResultLength">
                    <!-- eslint-disable -->
                    <template v-for="value in changeResult">
                        <span class="output__change-item">
                            {{ `${value.value} ₽` }}<br>
                            {{ `${value.change} coins` }}
                        </span>
                    </template>
                    <!-- eslint-enable -->
                </template>
                <template v-else>
                    <template v-if="totalProductsLength">
                        <span class="output__change-item">
                            No change
                        </span>
                    </template>
                </template>
            </div>
            <div class="output__output output__output_product">
                <template v-if="totalProductsLength">
                    <!-- eslint-disable -->
                    <template v-for="product in totalProducts">
                        <div class="output__product-item" tabindex="0" @click="removeElement(product.id)">
                            <product :product="product"></product>
                        </div>
                    </template>
                    <!-- eslint-enable -->
                </template>
            </div>
        </div>
    </div>
</template>
        
<script>
    import { mapGetters } from 'vuex';
    import Product from './Product.vue';

    export default {
        name: `OutputForm`,
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
                totalProducts: 'totalProducts'
            }),
            ...mapGetters('banknotes', {
                changeResult: 'changeResult'
            }),
            totalProductsLength() {
                return this.totalProducts.length > 0;
            },
            changeResultLength() {
                return this.changeResult.length > 0;
            },
            status() {
                return this.totalProductsLength ? `Take your product and change` : `.`;
            }
        },
        mounted() {
        },
        methods: {
            removeElement(id) {
                this.$store.dispatch(`products/removeFromTotal`, id);
                this.$store.dispatch(`banknotes/reset`);
            }
        }
    }
</script>