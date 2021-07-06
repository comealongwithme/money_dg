<template>
  <ul>
    <JokesItem
      v-for="(joke, index) of jokes"
      :key="index"
      :joke="joke"
      @like="$emit('like', joke.id)"
    />
  </ul>
</template>

<script>
import JokesItem from './JokesItem.vue';
export default {
  name: 'JokesList',
  components: { JokesItem },
  props: ['jokes'],
  setup() {
    return {};
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
</style>
