export default {
    namespaced: true,
    state: () => ({
        items: [],
    }),

    getters: {
        filteredCatalog(state) {
            return state.items.filter(el => !!el.category); 
        },

        descriptionProduct(state, id) {
            return state.items.find(item => item.id == id);
        },
    },

    mutations: {
        setCatalog(state, data) {
            state.items = data;
        },
    },

    actions: {
        async getCatalog({ commit }, url) {
            try {
                const data = await $api.send(url, 'GET');
                commit('setCatalog', data);
            } catch (err) {
                console.warn(err);
            };
        },
    },
};