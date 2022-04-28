import { catalog } from '@api';

export default {
    namespaced: true,
    state: () => ({
        product: {},
    }),

    mutations: {
        setProduct(state, data) {
            state.product = data;
            state.product.amount = 1;
        },

        setIncrement(state, val) {
            state.product.amount += val;
        },
    },

    actions: {
        async getProduct({ commit }, val) {
            try {
                const data = await catalog.incrementCatalog({ id: val.id })
                commit('setProduct', data);
            } catch (err) {
                console.warn(err);
            };
        },
    },
};