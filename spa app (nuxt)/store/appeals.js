export const state = () => ({
    appeals: [],
});

export const getters = {
    appeals(state) {
        return state.appeals;
    },
};

export const mutations = {
    setAppeal(state, data) {
        state.appeals.push(data);
    },
};

export const actions = {
    getAppeal({ commit }, appeal) {
        commit("setAppeal", appeal);
    },
};