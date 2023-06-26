<template>
  <div class="mt-5">
    <fieldset>
      <ul class="flex flex-row flex-wrap">
        <li
          v-for="jobType in UNIQUE_JOB_TYPES"
          :key="jobType"
          class="w-1/2 h-8"
        >
          <input
            :id="jobType"
            v-model="selectedJobTypes"
            type="checkbox"
            class="mr-3"
            :value="jobType"
            @change="selectedJobType"
          />
          <label :for="jobType">{{ jobType }}</label>
        </li>
      </ul>
    </fieldset>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { UNIQUE_JOB_TYPES, ADD_SELECTED_JOB_TYPES } from "@/store/constants";
export default {
  name: "JobFiltersSidebarJobTypes",
  data() {
    return {
      selectedJobTypes: [],
    };
  },
  computed: {
    ...mapGetters([UNIQUE_JOB_TYPES]),
  },
  methods: {
    ...mapMutations([ADD_SELECTED_JOB_TYPES]),
    selectedJobType() {
      this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);
      this.$router.push({ name: "JobResultsView" });
    },
  },
};
</script>

<style></style>
