<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ experiment }}</h1>
    <button @click="onHome">Home page click</button>
  </div>
</template>
<script>
export default {
  name: "AboutView",
  computed: {
    experiment() {
      console.log(this.$route);
      return "AboutView";
    },
  },
  methods: {
    onHome() {
      this.$router.push({ path: "/home" });
    },
  },
};
</script>
