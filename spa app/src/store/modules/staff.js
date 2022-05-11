export default {
    namespaced: true,
    state: () => ({
        appeal: JSON.parse(localStorage?.appeal || '[]'),
    }),

    getters: {
        getAppeal(state) {
            return state.appeal;
        },
    },

    mutations: {
        setAppeal(state, appeal) {
            state.appeal.push(appeal);
            localStorage.setItem("appeal", JSON.stringify(state.appeal));
        },
    },

    actions: {
        sendAppeal({ commit }, value) {
            commit('setAppeal', value);
        },
    },
};