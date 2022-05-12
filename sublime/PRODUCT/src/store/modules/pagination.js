export default {
    namespaced: true,
    state: () => ({
        currentPage: 1,
        shows: 8,
        pages: 0,
    }),

    mutations: {
        setPages(state, total) {
            state.pages = Math.ceil(total / state.shows);
        },

        changePage(state, page) {
            state.currentPage = page;
        },
    },
};