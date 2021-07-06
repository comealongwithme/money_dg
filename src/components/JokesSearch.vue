<template>
  <input type="text" placeholder="Search..." name="search" value="" />
</template>

<script>
export default {
  name: 'JokesSearch',
  setup() {
    return {};
  },
};
</script>

<style scoped>
input {
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.3);
}
</style>
