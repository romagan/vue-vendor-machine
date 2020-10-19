<template>
    <form class="form" @submit.prevent="chooseNumber">
        <label class="text-board form__label">
            <span class="text-board__text">
                {{ status }}
            </span>
        </label>
        <div class="form__input-container">
            <input :class="[`form__input`, disabledClass]"
                    type="text"
                    v-model="inputValue"
                    :placeholder="placeholder"
                    :disabled="isDisabled">
        </div>
    </form>
</template>
        
<script>
    import { mapGetters } from 'vuex';

    export default {
        name: `ResultForm`,
        components: {
            
        },
        props: {
            
        },
        data() {
            return {
                inputValue: ``,
                insertedType: '',
                isResultSent: false
            }
        },
        computed: {
            ...mapGetters('banknotes', {
                sum: 'sum'
            }),
            ...mapGetters('products', {
                itemsPrice: 'itemsPrice',
                itemsId: 'itemsId'
            }),
            isDisabled() {
                const isDisabledIndex = this.itemsPrice.findIndex(item => this.sum >= item);
                if (!this.isResultSent) {
                    return isDisabledIndex === -1;
                } else {
                    return true;
                }
            },
            status() {
                let status = ``;

                if (!this.isDisabled) {
                    if (this.insertedType == `text`) {
                        status = `Choice must be a number!`;
                    } else if (this.insertedType == `unknown`) {
                        status = `Enter the correct number`;
                    } else if (this.insertedType == `expensive`) {
                        status = `Not enough money!`;
                    } else {
                        status = `Choose product...`;
                    }
                } else {
                    if (this.insertedType == `success`) {
                        status = `Success!`;
                    } else {
                        status = `.`;
                    }
                }

                return status;
            },
            placeholder() {
                return !this.isDisabled ? `...` : `.`;
            },
            disabledClass() {
                return this.isDisabled ? `form__input_disable` : ``;
            }
        },
        watch: {
            insertedType(newVal) {
                if (newVal !== `` && newVal !== `success`) {
                    setTimeout(() => {
                        this.insertedType = ``;
                    }, 1000);
                }
            },
            sum(newVal) {
                if (newVal == 0) {
                    this.inputValue = ``;
                    this.insertedType = ``;
                    this.isResultSent = false;
                }
            }
        },
        mounted() {
            
        },
        methods: {
            chooseNumber() {
                const value = parseInt(this.inputValue, 10);

                if (!isNaN(value)) {
                    const isAvailableValueIndex = this.itemsId.findIndex((item) => value === item);

                    if (isAvailableValueIndex !== -1) {
                        if (this.sum >= this.itemsPrice[isAvailableValueIndex]) {
                            this.$store.dispatch(`products/addToTotal`, this.itemsId[isAvailableValueIndex]);
                            this.$store.dispatch(`banknotes/calculateChange`, this.itemsPrice[isAvailableValueIndex]);
                            this.isResultSent = true;
                            this.insertedType = 'success';
                        } else {
                            this.insertedType = 'expensive';
                        }
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