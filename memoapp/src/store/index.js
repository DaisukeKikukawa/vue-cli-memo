import Vue from "vue";
import Vuex from "vuex";
import createdPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createdPersistedState()],
  state: {
    memos: [],
  },
  mutations: {
    save(state, memo) {
      memo.id = state.memos.length + 1;
      state.memos.push(memo);
    },
    update(state, data) {
      const updatedMemo = state.memos.find((memo) => memo.id === data.id);
      updatedMemo.body = data.body;
    },
    remove(state, id) {
      state.memos = state.memos.filter((memo) => memo.id !== id);
    },
  },
});
