export default {
    namespaced: true,
    state: {
        items: getProducts(),
        totalProducts: []
    },
    getters: {
        items(state) {
            return state.items;
        },
        itemsPrice(state, getters) {
            return getters.items.map((item) => parseInt(item.price, 10));
        },
        itemsId(state, getters) {
            return getters.items.map((item) => item.id);
        },
        totalProducts(state) {
            return state.totalProducts;
        }
    },
    mutations: {
        addToTotal(state, id) {
            const item = state.items.filter((item) => item.id == id);
            state.totalProducts.push(...item);
        },
        removeFromTotal(state, id) {
            const index = state.totalProducts.findIndex(item => item.id == id);
            state.totalProducts.splice(index, 1);
        }
    },
    actions: {
        addToTotal({commit}, id) {
            commit(`addToTotal`, id);
        },
        removeFromTotal({commit}, id) {
            commit(`removeFromTotal`, id);
        }
    }
}

function getProducts() {
    return [
        {
            id: 1,
            title: 'Cola',
            desc: 'Acid Drink',
            price: '134'
        },
        {
            id: 2,
            title: 'Evian',
            desc: 'Pure Water',
            price: '500'
        },
        {
            id: 13,
            title: 'Contex',
            desc: 'Condoms',
            price: '600'
        },
        {
            id: 15,
            title: 'Snickers',
            desc: 'Nuts Choco bar',
            price: '100'
        },
        {
            id: 16,
            title: 'Wagon Wheels',
            desc: 'Choco cookies',
            price: '165'
        },
        {
            id: 18,
            title: 'Nestea',
            desc: 'Ice Tea',
            price: '60'
        },
        {
            id: 22,
            title: 'Skittles',
            desc: 'Fruit-flavored Candies',
            price: '90'
        },
    ]
}
