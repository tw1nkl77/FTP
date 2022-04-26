export default {
    namespaced: true,
    state: () => ({
        methods: [],
        selectedMethod: {},
    }), 

    getters: {
        shipping(state) {
            return Object.keys(state.selectedMethod).length ? (+state.selectedMethod.price) : 0;
        },
    },

    mutations: {
        setMethods(state, data) {
            state.methods = data;
        },

        setSelectMethod(state, method) {
            const newMethod = state.methods.find(item => item.method == method);
            state.selectedMethod = newMethod;
        },
    },

    actions: {
        async getMethods({ commit }, url) {
            try {
                const data = await $api.send(url, 'GET');
                commit('setMethods', data);
            } catch (err) {
                console.warn(err);
            };
        },

        getSelectMethod({ commit }, method) {
            commit('setSelectMethod', method);
        },
    },
};