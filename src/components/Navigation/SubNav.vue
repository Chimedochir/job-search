<template>
  <div class="w-full h-16 bg-white border-b border-solid border-brand-gray-1">
    <div class="flex items-center h-full px-8">
      <div v-if="onJobResultsPage" class="" data-test="job-count">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span
          ><span class="text-brand-green-1">{{ FILTERED_JOBS.length }}</span>
          jobs matched</span
        >
      </div>
    </div>
  </div>
</template>
<script>
// import { mapGetters } from "vuex";
// import { FILTERED_JOBS } from "@/store/constants";
import { useFilteredJobs } from "@/store/composable";
import useConfirmRoute from "@/composable/useConfirmRoute";
export default {
  name: "SubNav",
  // computed: {
  //   ...mapGetters([FILTERED_JOBS]),
  //   JobResultsView() {
  //     return this.$route.name === "JobResultsView";
  //   },
  // },
  setup() {
    // const store = useStore();
    // const FILTERED_JOBS = computed(() => store.getters.FILTERED_JOBS);
    const FILTERED_JOBS = useFilteredJobs();
    const onJobResultsPage = useConfirmRoute("JobResultsView");
    return { onJobResultsPage, FILTERED_JOBS };
  },
};
</script>
