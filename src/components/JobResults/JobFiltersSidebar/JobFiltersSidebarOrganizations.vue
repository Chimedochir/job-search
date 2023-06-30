<template>
  <accordion-component>
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="organization in uniqueOrganizations"
            :key="organization"
            class="w-1/2 h-8"
          >
            <input
              :id="organization"
              v-model="selectedOrganizations"
              type="checkbox"
              class="mr-3"
              :value="organization"
              @change="selectedOrganization"
            />
            <label :for="organization">{{ organization }}</label>
          </li>
        </ul>
      </fieldset>
    </div></accordion-component
  >
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ADD_SELECTED_ORGANIZATIONS } from "@/store/constants";
import { useUniqueOrganizations } from "@/store/composable";
import AccordionComponent from "@/components/Shared/AccordionComponent.vue";
export default {
  name: "JobFiltersSidebarOrganizations",
  components: { AccordionComponent },
  setup() {
    const selectedOrganizations = ref([]);
    const uniqueOrganizations = useUniqueOrganizations();
    const router = useRouter();
    const store = useStore();
    const selectedOrganization = () => {
      store.commit(ADD_SELECTED_ORGANIZATIONS, selectedOrganizations);
      router.push({ name: "JobResultsView" });
    };
    return { selectedOrganizations, uniqueOrganizations, selectedOrganization };
  },
  // methods: {
  //   ...mapMutations([ADD_SELECTED_ORGANIZATIONS]),
  //   selectedOrganization() {
  //     this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganizations);
  //     this.$router.push({ name: "JobResultsView" });
  //   },
  // },
};
</script>

<style></style>
