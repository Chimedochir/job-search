<template>
  <nav>
    <router-link to="/home1">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <h1>Header Component</h1>
</template>

<script>
// import HomeView from "@/views/HomeView.vue";
export default {
  name: "HeaderComponent",
  // components: { HomeView },
};
</script>

<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
