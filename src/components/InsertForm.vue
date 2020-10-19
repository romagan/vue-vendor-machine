<template>
    <form class="form" @submit.prevent="insertValue">
        <label class="text-board form__label">
            <span class="text-board__text">
                {{ status }}
            </span>
        </label>

        <div class="form__input-container">
            <input :class="[`form__input`, disabledClass]"
                    placeholder="..."
                    type="text"
                    v-model="inputValue"
                    :disabled="totalProductsLength">
        </div>

        <span class="form__desc">
            Available banknotes: 50, 100,<br>
            200, 500 or 1000 ₽.<br>
            The machine gives change<br>
            in 1, 2, 5 and 10 R coins.
        </span>
    </form>
</template>
        
<script>
    import { mapGetters } from 'vuex';

    export default {
        name: `InsertForm`,
        components: {
            
        },
        props: {
            
        },
        data() {
            return {
                inputValue: '',
                insertedType: ''
            }
        },
        computed: {
            ...mapGetters('banknotes', {
                availableBanknotes: 'availableBanknotes',
                sum: 'sum'
            }),
            ...mapGetters('products', {
                totalProducts: 'totalProducts'
            }),
            status() {
                let status = ``;

                if (this.sum > 0) {
                    status = `Insert money ${this.sum} ₽`
                } else {
                    status = `Insert banknotes...`;
                }

                if (this.insertedType !== ``) {
                    if (this.insertedType == `text`) {
                        status = `Banknote must be a number!`;
                    } else if (this.insertedType == `unknown`) {
                        status = `Unknown banknote!`;
                    }
                }

                return status;
            },
            totalProductsLength() {
                return this.totalProducts.length > 0;
            },
            disabledClass() {
                return this.totalProductsLength ? `form__input_disable` : ``;
            }
        },
        watch: {
            insertedType(newVal) {
                if (newVal !== ``) {
                    setTimeout(() => {
                        this.insertedType = ``;
                    }, 1000);
                }
            },
            sum(newVal) {
                if (newVal == 0) {
                    this.inputValue = ``;
                }
            }
        },
        mounted() {
            
        },
        methods: {
            insertValue() {
                const value = parseInt(this.inputValue, 10);

                if (!isNaN(value)) {
                    const isAvailableValueIndex = this.availableBanknotes.findIndex((item) => value === item);

                    if (isAvailableValueIndex !== -1) {
                        this.$store.dispatch(`banknotes/addToSum`, this.availableBanknotes[isAvailableValueIndex]);
                    } else {
                        this.insertedType = 'unknown';
                    }
                } else {
                    this.insertedType = 'text';
                }
            }
        }
    }
</script>