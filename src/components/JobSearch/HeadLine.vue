<template>
  <section class="mb-16">
    <h1
      class="text-8xl tracking-tighter mb-14 font-bold"
      data-test=""
      action-phrase
    >
      <span :class="actionClasses">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Chimedochir Corp.</h2>
  </section>
</template>
<script>
import nextElementinList from "@/utils/nextElementinList";
export default {
  name: "HeadLine",
  data() {
    return {
      action: "Build",
      interval: null,
    };
  },
  computed: {
    actionClasses() {
      return {
        [this.action.toLowerCase()]: true,
      };
    },
  },
  created() {
    this.changeTitle();
  },
  beforeUnmount() {
    clearInterval(this.interval);
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"];

        this.action = nextElementinList(actions, this.action);
      }, 3000);
    },
  },
};
</script>
<style scoped>
.build {
  color: #1a73e8;
}
.create {
  color: #34a853;
}
.design {
  color: #f9ab00;
}
.code {
  color: #d93025;
}
</style>
