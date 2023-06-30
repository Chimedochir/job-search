<template>
  <accordion-component>
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="jobType in uniqueJobTypes"
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
    </div></accordion-component
  >
</template>

<script>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { useUniqueJobType } from "@/store/composable";
import { ADD_SELECTED_JOB_TYPES } from "@/store/constants";
import { ref } from "vue";
import AccordionComponent from "@/components/Shared/AccordionComponent.vue";

export default {
  name: "JobFiltersSidebarJobTypes",
  components: { AccordionComponent },

  setup() {
    const store = useStore();
    const router = useRouter();
    const selectedJobTypes = ref([]);
    const uniqueJobTypes = useUniqueJobType();
    const selectedJobType = () => {
      store.commit(ADD_SELECTED_JOB_TYPES, selectedJobTypes.value);
      router.push({ name: "JobResultsView" });
    };
    return { selectedJobTypes, uniqueJobTypes, selectedJobType };
  },
  // methods: {
  //   ...mapMutations([ADD_SELECTED_JOB_TYPES]),
  //   selectedJobType() {
  //     this.ADD_SELECTED_JOB_TYPES(this.selectedJobTypes);
  //     this.$router.push({ name: "JobResultsView" });
  //   },
  // },
};
</script>

<style></style>
