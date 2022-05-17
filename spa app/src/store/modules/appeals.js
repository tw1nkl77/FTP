export default {
    namespaced: true,
    state: () => ({
        methodsOfSort: [
            {
                name: 'По ФИО',
                value: 'name',
            },
            {
                name: 'По обращению',
                value: 'text',
            },
        ],
        appeals: JSON.parse(localStorage?.appeals || '[]'),
        selectedFilter: null,
    }),

    getters: {
        getFilter(state) {
            return state.filter;
        },

        appeals(state) {
            return state.appeals;
        },
    },

    mutations: {
        setAppeal(state, appeal) {
            state.appeals.push(appeal);
            localStorage.setItem("appeals", JSON.stringify(state.appeals));
        },

        selectSort(state, data) {
            const method = state.methodsOfSort.find(sort => sort.name === data);

            if (data) {
                state.appeals.sort((prev, next) => {
                    if (prev[method.value] < next[method.value]) return -1;
                    if (prev[method.value] < next[method.value]) return 1;
                });
            } else {
                state.appeals = JSON.parse(localStorage.getItem("appeals"));
            };
        },

        updateAppeals(state, appeal) {
            const appeals = JSON.parse(localStorage.getItem("appeals"));
            state.appeals = appeals.filter(item => item.id != appeal.id);
            localStorage.setItem("appeals", JSON.stringify(state.appeals));
        },
    },

    actions: {
        getAppeal({ commit }, appeal) {
            commit('setAppeal', appeal);
        },
    },
};