export const state = () => ({
    appeals: [],
    // incorrectData: null,
});

export const getters = {
    appeals(state) {
        return state.appeals;
    },

    // incorrectData(state) {
    //     return state.incorrectData;
    // },
};

export const mutations = {
    setAppeal(state, data) {
        state.appeals.push(data);
    },

    // setIncorrectData(state, data) {
    //     state.incorrectData = data;
    // },
};

export const actions = {
    getAppeal({ commit }, appeal) {
        commit("setAppeal", appeal);
    },

    // getIncorrectData({commit}, data) {
    //     commit("setIncorrectData", data);
    // },
};