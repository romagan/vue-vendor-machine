export default {
    namespaced: true,
    state: {
        availableBanknotes: [
            50, 100, 200, 500, 1000
        ],
        availableChange: [
            10, 5, 2, 1
        ],
        changeResult: [],
        sum: 0
    },
    getters: {
        availableBanknotes(state) {
            return state.availableBanknotes;
        },
        sum(state) {
            return state.sum;
        },
        formattedSum(state) {
            return `${state.sum} ₽`;
        },
        changeResult(state) {
            return state.changeResult;
        }
    },
    mutations: {
        addToSum(state, sum) {
            state.sum += sum;
        },
        reset(state) {
            state.sum = 0;
            state.changeResult = [];
        },
        calculateChange(state, price) {
            let change = state.sum - price;

            if (change > 0) {
                for (let value of state.availableChange) {
                    const balance = Math.floor(change / value);

                    if (balance > 0) {
                        state.changeResult.push({
                            'value': value,
                            'change': balance
                        });
                    }

                    if (change % value === 0) {
                        break;
                    }

                    change = change % value;
                }
            }
        }
    },
    actions: {
        addToSum({commit}, sum) {
            commit(`addToSum`, sum);
        },
        reset({commit}) {
            commit(`reset`);
        },
        calculateChange({commit}, price) {
            commit(`calculateChange`, price);
        }
    },
}