import { catalog } from '@api';

export default {
    namespaced: true,
    state: () => ({
        items: [],
        sort: [{
            name: 'DEFAULT',
            value: 'id',
        }],
        categories: {
            1: "New",
            2: "Sale",
            3: "Hot",
        },
        selectedProduct: {},
        productApi: 'https://raw.githubusercontent.com/SergioElCringe/JS_step_2/init/PROJECT/1/src/assets/img',
    }),

    getters: {
        sortedCatalog(state) {
            const selectedSort = state.sort.val;
            return state.items.sort((prev, next) => {
                if (state.sort.name === 'name') {
                    if (prev[selectedSort] < next[selectedSort]) return -1;
                    if (prev[selectedSort] < next[selectedSort]) return 1;
                } else {
                    return prev[selectedSort] - next[selectedSort];
                };
            });
        },
    },

    mutations: {
        setCatalog(state, data) {
            state.items = data;
        },

        setProduct(state, data) {
            state.selectedProduct = data;
            state.selectedProduct.amount = 1;
        },

        incrementAmount(state, amount) {
            state.selectedProduct.amount += amount;
        },

        setSort(state, val) {
            state.sort = val;
        },
    },

    actions: {
        async getCatalog({ commit }, params = {}) {
            try {
                const { data, totalItems } = await catalog.getCatalog(params);
                commit('setCatalog', data);
                commit('Pagination/setPages', totalItems, { root: true });
            } catch (err) {
                console.warn(err);
            };
        },

        async getProduct({ commit }, val) {
            try {
                const data = await catalog.getProduct(val);
                commit('setProduct', data);
            } catch (err) {
                console.warn(err);
            };
        }
    },
};