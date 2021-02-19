import Vue from "vue";
import Vuex from "vuex";
import bookModule from './modules/book.module.js';
Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    userMsg: ''
  },
  getters: {
    userMsg({ userMsg }) {
      return userMsg
    }
  },
  mutations: {
    setMsg(state, { msgStr }) {
      state.userMsg = msgStr;
    },
  },
  actions: {
    setMsg({ commit }, { msgStr }) {
      commit({ type: 'setMsg', msgStr })
      setTimeout(() => {
        commit({ type: 'setMsg', msgStr: '' })
      }, 3000);
    },
  },
  modules: {
    bookModule
  }
});
