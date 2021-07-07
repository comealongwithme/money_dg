<template>
  <nav class="navbar">
    <router-link class="nav-link" to="/">Home</router-link>
    <router-link class="nav-link" to="/liked">Liked</router-link>
  </nav>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script></script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
.navbar {
  margin-bottom: 1rem;
  display: flex;
}

.nav-link {
  display: block;
  text-decoration: none;
  padding: 0.5rem 1rem;
  background: #8ee4af;
  color: white;
  border-radius: 0.25rem;
}

.nav-link.router-link-active {
  background: #5cdb95;
}

.nav-link:not(:last-child) {
  margin-right: 1rem;
}
</style>
