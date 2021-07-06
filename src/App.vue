<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/liked">Liked</router-link>
  </nav>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script></script>

<style scoped>
nav {
  margin-bottom: 1rem;
}

a:not(:last-child) {
  margin-right: 1rem;
}
</style>
