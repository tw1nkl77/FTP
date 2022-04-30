import { menu } from '@api';

export default {
    namespaced: true,
    state: () => ({
        items: [],
    }),

    mutations: {
        setMenu(state, data) {
            state.items = data;
        },
    },

    actions: {
        async getMenu({ commit }) {
            try {
<<<<<<< HEAD:PROJECT/PRODUCT/src/store/modules/menu.js
                const data = await menu.getMenu();
=======
                const data = await menu.increment();
>>>>>>> 2b1d14553068f4033c6fbfebdf72db20f790364b:Project/PRODUCT/src/store/modules/menu.js
                commit('setMenu', data);
            } catch (err) {
                throw err;
            };
        },
    },
};