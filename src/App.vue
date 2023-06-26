<template>
  <div>
    <MainNav />
    <router-view />
  </div>
</template>
<script>
// import HeaderComponent from "@/components/HeaderComponent.vue";
import MainNav from "@/components/Navigation/MainNav.vue";
export default {
  name: "App",
  components: { MainNav },
};
</script>
<style></style>
