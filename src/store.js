import { createStore } from 'vuex';

const config = {
  state() {
    return {
      jokes: [],
    };
  },
  mutations: {
    addJokes(state, data) {
      state.jokes = state.jokes.concat(data.data);
    },
  },
};

const Store = createStore(config);

export default Store;
