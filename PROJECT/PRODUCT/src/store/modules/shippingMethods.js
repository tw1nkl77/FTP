import { shippingMethods } from '@api';

export default {
    namespaced: true,
    state: () => ({
        items: [],
    }),

    mutations: {
        setMethods(state, data) {
            state.items = data;
        },
    },

    actions: {
        async getMethods({ commit }) {
            try {
<<<<<<< HEAD:PROJECT/PRODUCT/src/store/modules/shippingMethods.js
                const data = await shippingMethods.getMethods();
=======
                const data = await shippingMethods.increment();
>>>>>>> 2b1d14553068f4033c6fbfebdf72db20f790364b:Project/PRODUCT/src/store/modules/shippingMethods.js
                commit('setMethods', data);
            } catch (err) {
                throw err;
            };
        },
    },
};