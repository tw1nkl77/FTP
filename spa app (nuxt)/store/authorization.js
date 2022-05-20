export const state = () => ({
    sessions: null,
    auth: null,
    incorrectData: false,
});

export const getters = {
    token(state) {
        if (state.auth) {
            const { login, password } = state.auth;
            const token = state.sessions.find(session => session.login === login && session.password === password);

            if (token) {
                state.incorrectData = false;
                return token.rights;
            };

            state.incorrectData = true;
        };
        return false;
    },
};

export const mutations = {
    setSessions(state, data) {
        state.sessions = data;
    },

    setToken(state, data) {
        state.auth = data;
    },

    setClearToken(state) {
        state.auth = null;
    },
};

export const actions = {
    getSessions({ commit }) {
        const sessions = [{
            login: "staff",
            password: "staff12345",
            rights: "staff",
        }];
        commit("setSessions", sessions);
    },

    getToken({ commit }, token) {
        commit("setToken", token);
    },

    getClearToken({ commit }) {
        commit("setClearToken");
    },
};