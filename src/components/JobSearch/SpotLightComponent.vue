<template>
  <ul>
    <li v-for="spotlight in spotlights" :key="spotlight.id">
      <slot :spotlight="spotlight"></slot>
    </li>
  </ul>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";
export default {
  name: "SpotLightComponent",
  // data() {
  //   return {
  //     spotlights: [],
  //   };
  // },
  // async mounted() {
  //   const baseUrl = process.env.VUE_APP_API_URL;
  //   const url = `${baseUrl}/spotlights`;
  //   const response = await axios.get(url);
  //   this.spotlights = response.data;
  // },
  setup() {
    const spotlights = ref([]);
    const getSpotlights = async () => {
      const baseUrl = process.env.VUE_APP_API_URL;
      const url = `${baseUrl}/spotlights`;
      const response = await axios.get(url);
      spotlights.value = response.data;
    };
    onMounted(getSpotlights);
    return { spotlights };
  },
};
</script>

<style></style>
