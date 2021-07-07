<template>
  <input
    type="text"
    placeholder="Search..."
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

    const search = debounce(function () {}, 600);

    const generateUrl = (apiUrl) => {
      return (params) => {
        return `${apiUrl}${params}`;
      };
    };

    const generateParams = (params) => {
      let output = '';
      for (let key in params) {
        output += `?${key}=${params[key]}`;
      }
      return output;
    };

    const apiUrl = generateUrl(`https://v2.jokeapi.dev/joke/Any`)(
      generateParams({ amount: 10 })
    );

    // var jokes = ref(null);

    const store = useStore();
    const jokes = computed(() => store.state.jokes);

    onMounted(() => {
      if (jokes.value.length <= 0) {
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            store.commit('addJokes', { data: data.jokes });
          });
      }
    });

    const like = (id) => {
      for (let joke of jokes.value) {
        if (joke.id == id) {
          joke.like = !joke.like;
        }
      }
    };

    return { jokes, like, search, inputValue };
  },
};
</script>

<style></style>
