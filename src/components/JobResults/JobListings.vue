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
            class="mx-3 text-sm font semibold text-brand-blue-1"
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
import { mapState, mapActions, mapGetters } from "vuex";
import { FETCH_JOBS } from "@/store/constants";
import JobListing from "./JobListing.vue";
import { FILTERED_JOBS } from "@/store/constants";
export default {
  name: "JobListings",
  components: {
    JobListing,
  },
  // data() {
  //   return {
  //     jobs: [],
  //   };
  // },
  computed: {
    currentPage() {
      const pageString = this.$route.query.page || "1";
      return Number.parseInt(pageString);
    },
    previousPage() {
      const previousPage = this.currentPage - 1;
      const firstPage = 1;
      return previousPage >= firstPage ? previousPage : undefined;
    },
    nextPage() {
      const nextPage = this.currentPage + 1;
      const maxPage = Math.ceil(this.FILTERED_JOBS.length / 10);
      return nextPage <= maxPage ? nextPage : undefined;
    },

    displayedJobs() {
      const pageNumber = this.currentPage;
      const firstJobIndex = (pageNumber - 1) * 10;
      const lastJobIndex = pageNumber * 10;

      return this.FILTERED_JOBS.slice(firstJobIndex, lastJobIndex);
    },
    ...mapState(["isLoggedIn"]),
    ...mapGetters([FILTERED_JOBS]),
  },

  async mounted() {
    // const baseUrl = process.env.VUE_APP_API_URL;
    // const response = await axios.get(`${baseUrl}/jobs`);
    // this.jobs = response.data;
    this.FETCH_JOBS();
    // this.$store.dispatch(FETCH_JOBS);
  },
  methods: {
    ...mapActions([FETCH_JOBS]),
  },
};
</script>

<style></style>
