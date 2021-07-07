<template>
  <JokesList :jokes="jokes" @like="like" v-if="jokes.length > 0" />
  <div v-else>You didn't like any joke!</div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import JokesList from '../components/JokesList.vue';
import { useStore } from 'vuex';
export default {
  name: 'Liked',
  components: { JokesList },
  setup() {
    const store = useStore();
    const jokes = computed(() =>
      store.state.jokes.filter((item) => item.like == true)
    );
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
