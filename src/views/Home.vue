<template>
  <input
    type="text"
    placeholder="Search..."
    class="search"
    name="search"
    v-model="inputValue"
    @input="search"
  />
  <JokesList :jokes="jokes" @like="like" />
</template>

<script>
import JokesList from '../components/JokesList.vue';
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
export default {
  name: 'Home',
  components: { JokesList },
  setup() {
    const inputValue = ref('');

    function debounce(func, wait, immediate) {
      let timeout;
      return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function () {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    }

    const generateUrl = (apiUrl) => {
      return (params) => {
        return `${apiUrl}${params}`;
      };
    };

    const generateParams = (params) => {
      let output = '';
      for (let key in params) {
        output += `&${key}=${params[key]}`;
      }
      return '?' + output;
    };

    const apiUrl = generateUrl(`https://v2.jokeapi.dev/joke/Any`)(
      generateParams({ amount: 10, type: 'single' })
    );

    const store = useStore();
    var jokes = computed(() => store.state.jokes);

    onMounted(() => {
      if (jokes.value.length <= 0) {
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            store.commit('addJokes', { data: data.jokes });
          });
      }
    });

    // watchEffect(() => console.log(jokes));

    const search = debounce(function () {
      // jokes.value.filter((joke) => joke.joke.includes(inputValue.value))
      fetch(apiUrl + `&contains=${inputValue.value}`)
        .then((response) => response.json())
        .then((data) => {
          if (data && data.jokes.length > 0) {
            store.commit('setJokes', { data: data.jokes });
          }
        });
    }, 600);

    const like = (id) => {
      for (let joke of jokes.value) {
        if (joke.id == id) {
          joke.like = !joke.like;
          if (joke.like) {
            store.commit('addLikedJokes', { data: joke });
          } else {
            store.commit('removeLikedJokes', { data: joke.id });
          }
        }
      }
    };

    return { jokes, like, search, inputValue };
  },
};
</script>

<style>
.search {
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 0 0.25rem 0 rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(0.125rem);
}
.search:focus {
  outline-color: #5cdb95;
}
</style>
