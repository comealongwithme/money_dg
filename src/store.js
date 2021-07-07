import { createStore } from 'vuex';

const config = {
  state() {
    return {
      jokes: [],
      likedJokes: [],
    };
  },
  mutations: {
    addJokes(state, data) {
      state.jokes = state.jokes.concat(data.data);
    },
    setJokes(state, data) {
      console.log(data);
      state.jokes = data.data;
    },
    addLikedJokes(state, data) {
      state.likedJokes = state.likedJokes.concat(data.data);
    },
    removeLikedJokes(state, data) {
      var removeIndex = state.likedJokes
        .map(function (item) {
          return item.id;
        })
        .indexOf(data.id);
      state.likedJokes.splice(removeIndex, 1);
    },
  },
};

const Store = createStore(config);

export default Store;
