<template>
  <div
    class="flex flex-col p-4 bg-white border-r border-solid border-brand-gray-1 w-96"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">What do you want to do?</h3>
        <div class="flex items-center text-sm">
          <action-button text="Clear Filters" type="secondary" />
        </div>
      </div>
      <accordion-component header="Degree"></accordion-component>
      <!-- <accordion-component header="Job types"
        ><job-filters-sidebar-job-types
      /></accordion-component>
      <accordion-component header="Organizations"
        ><job-filters-sidebar-organizations
      /></accordion-component> -->
      <job-filters-sidebar-checkbox-group-vue
        header="Job Types"
        :uniqueValues="uniqueJobTypes"
        :mutation="ADD_SELECTED_JOB_TYPES"
      />
      <job-filters-sidebar-checkbox-group-vue
        header="Organizations"
        :unique-values="uniqueOrganizations"
        :mutation="ADD_SELECTED_ORGANIZATIONS"
      />
    </section>
  </div>
</template>

<script>
import ActionButton from "@/components/Shared/ActionButton.vue";
import AccordionComponent from "@/components/Shared/AccordionComponent.vue";
import JobFiltersSidebarCheckboxGroupVue from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarCheckboxGroup.vue";
import { useUniqueJobType, useUniqueOrganizations } from "@/store/composable";

import {
  ADD_SELECTED_JOB_TYPES,
  ADD_SELECTED_ORGANIZATIONS,
} from "@/store/constants";
export default {
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    AccordionComponent,

    JobFiltersSidebarCheckboxGroupVue,
  },
  setup() {
    const uniqueJobTypes = useUniqueJobType();
    const uniqueOrganizations = useUniqueOrganizations();
    return {
      uniqueJobTypes,
      uniqueOrganizations,
      ADD_SELECTED_JOB_TYPES,
      ADD_SELECTED_ORGANIZATIONS,
    };
  },
};
</script>

<style></style>
