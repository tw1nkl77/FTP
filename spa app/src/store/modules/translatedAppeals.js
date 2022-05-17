export default {
    namespaced: true,
    state: () => ({
        translatedAppeals: JSON.parse(localStorage?.translatedAppeals || '[]'),
        selectedDepartment: null,
    }),

    getters: {
        translatedAppeals(state) {
            return state.translatedAppeals;
        },

        getDepartment(state) {
            if (state.selectedDepartment) {
                return state.translatedAppeals.filter(item => item.department === state.selectedDepartment);
            } else {
                return state.translatedAppeals;
            };
        },
    },

    mutations: {
        setAppeals(state, appeal) {
            state.translatedAppeals.push(appeal);
            localStorage.setItem("translatedAppeals", JSON.stringify(state.translatedAppeals));
        },

        selectDepartment(state, data) {
            state.selectedDepartment = data;
        },
    },

    actions: {
        getAppeals({ commit }, appeal) {
            commit('setAppeals', appeal);
        },
    },
};