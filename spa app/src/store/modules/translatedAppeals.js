export default {
    namespaced: true,
    state: () => ({
        translatedAppeals: JSON.parse(localStorage?.translatedAppeals || '[]'),
    }),

    getters: {
        translatedAppeals(state) {
            return state.translatedAppeals;
        },
    },

    mutations: {
        setAppeals(state, appeal) {
            state.translatedAppeals.push(appeal);
            localStorage.setItem("translatedAppeals", JSON.stringify(state.translatedAppeals));
        },
    },

    actions: {
        getAppeals({ commit }, appeal) {
            commit('setAppeals', appeal);
        },
    },
};