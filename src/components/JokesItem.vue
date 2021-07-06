<template>
  <li>
    <span v-if="joke.setup"
      >{{ joke.setup }}
      <span style="color: red">{{ joke.delivery }}</span></span
    >
    <span v-else>{{ joke.joke }}</span>
    <span
      ><button @click="$emit('like', joke.id)">
        <span v-if="joke.like">Liked</span><span v-else>Like</span>
      </button></span
    >
  </li>
</template>

<script>
export default {
  name: 'JokesItem',
  props: ['joke'],
  setup() {
    return {};
  },
};
</script>

<style scoped>
li {
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
}
</style>
