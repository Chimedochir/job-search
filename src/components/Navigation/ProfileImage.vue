<template>
  <img :src="url" alt="this not find profile" class="w-8 h-8 rounded-3xl" />
</template>
<script>
export default {
  name: "ProfileImage",
  data() {
    return {
      url: "https://www.pngitem.com/pimgs/m/487-4876417_link-head-png-toon-link-face-png-transparent.png",
    };
  },
};
</script>
