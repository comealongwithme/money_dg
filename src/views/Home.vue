<template>
  <JokesSearch />
  <JokesList :jokes="jokes" @like="like" />
</template>

<script>
import JokesList from '../components/JokesList.vue';
import JokesSearch from '../components/JokesSearch.vue';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
export default {
  name: 'Home',
  components: { JokesList, JokesSearch },
  setup() {
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

    return { jokes, like };
  },
};
</script>

<style></style>
