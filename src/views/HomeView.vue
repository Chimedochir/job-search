<template>
  <div class="home">
    <hero-component />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
import HeroComponent from "@/components/JobSearch/HeroComponent.vue";
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
export default {
  name: "HomeView",
  components: {
    HeroComponent,
  },
};
</script>
