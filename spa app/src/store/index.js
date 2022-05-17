import { createStore } from 'vuex';
import Appeals from './modules/appeals';
import TranslatedAppeals from './modules/translatedAppeals';

export default createStore({
  state: {
    sessions: [
      {
        login: "staff",
        password: "staff12345",
        rights: "staff",
      },
      {
        login: "admin",
        password: "admin12345",
        rights: "admin",
      },
      {
        login: "support",
        passowrd: "support12345",
        rights: "support",
      },
    ],
    token: JSON.parse(localStorage?.token || null),
    incorrectData: false,
  },
  getters: {
    hasToken(state) {
      if (state.token) {
        const { login, password } = state.token;
        const session = state.sessions.find(session => session.login === login && session.password === password);
        if (session) {
          state.incorrectData = false;
          return session.rights;
        };
        state.incorrectData = true;
      };
      return false;
    },

    incorrectData(state) {
      return state.incorrectData;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },

    setClearToken(state) {
      state.token = null;
    },
  },
  actions: {
    getToken({ commit }, value) {
      localStorage.setItem("token", JSON.stringify(value));
      const token = JSON.parse(localStorage.getItem("token"));
      commit('setToken', token);
    },

    clearToken({ commit }) {
      localStorage.removeItem("token");
      commit("setClearToken");
    },
  },
  modules: { Appeals, TranslatedAppeals },
});
