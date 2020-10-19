import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import products from './modules/products';
import banknotes from './modules/banknotes';

export const store = new Vuex.Store({
    modules: {
        products,
        banknotes
    },
    strict: process.env.NODE_ENV !== 'production'
});
