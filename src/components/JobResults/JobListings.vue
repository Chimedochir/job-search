<template>
  <main class="flex-auto p-8 bg-brand-gray-2">
    <ol>
      <job-listing v-for="job in displayedJobs" :key="job.id" :job="job" />
    </ol>
    <div class="mt-8 mx-auto">
      <div class="flex flex-row flex-nowrap">
        <p class="text-sm flex-grow">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
            :to="{ name: JobResultsView, query: { page: previousPage } }"
            >Previous</router-link
          >
          <router-link
            v-if="nextPage"
            class="mx-3 text-sm font semibold text-brand-blue-1"
            :to="{ name: JobResultsView, query: { page: nextPage } }"
            >Next</router-link
          >
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// import axios from "axios";
import JobListing from "./JobListing.vue";
import useCurrentPage from "@/composable/useCurrentPage";
import { useFilteredJobs, useFetchJobsDispatch } from "@/store/composable";
import { onMounted, computed } from "vue";
import usePreviousAndNextPages from "@/composable/usePreviousAndNextPages";
export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  setup() {
    // const store = useStore();

    // const fetchJobs = () => store.dispatch(FETCH_JOBS);

    onMounted(useFetchJobsDispatch);
    const currentPage = useCurrentPage();
    const filteredJobs = useFilteredJobs();
    const maxPage = Math.ceil(filteredJobs.value.length / 10);

    const { previousPage, nextPage } = usePreviousAndNextPages(
      currentPage,
      maxPage
    );
    const displayedJobs = computed(() => {
      const pageNumber = currentPage.value;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;

      return filteredJobs.value.slice(firstJobIndex, lastJobIndex);
    });
    return { displayedJobs, previousPage, currentPage, nextPage };
  },
};
</script>

<style></style>
