import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    menu: []
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    MENU(state) {
      return state.menu;
    }
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      return state.products = products.data;
    },
    SET_MENU: (state, menu) => {
      return state.menu = menu.data;
    }  
  },
  actions: {
    GET_PRODUCTS: async ({commit}) => {
      await axios.get('https://raw.githubusercontent.com/schultznoan/FTP/main/catalog.json')
      .then(products => {
        commit('SET_PRODUCTS', products);
        return products;
      })
      .catch(err => {
        console.warn(err);
        return err;
      });  
    },

    GET_MENU: async ({commit}) => {
      await axios.get('https://raw.githubusercontent.com/schultznoan/FTP/main/menu.json')
      .then(menu => {
        commit('SET_MENU', menu);
        return menu;
      })
      .catch(err => {
        console.warn(err);
        return err;
      });
    }
  }
});
