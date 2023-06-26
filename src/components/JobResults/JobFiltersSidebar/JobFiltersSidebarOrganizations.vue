<template>
  <div class="mt-5">
    <fieldset>
      <ul class="flex flex-row flex-wrap">
        <li
          v-for="organization in UNIQUE_ORGANIZATIONS"
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
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { UNIQUE_ORGANIZATIONS } from "@/store/constants";
import { ADD_SELECTED_ORGANIZATIONS } from "@/store/constants";
export default {
  name: "JobFiltersSidebarOrganizations",
  data() {
    return {
      selectedOrganizations: [],
    };
  },
  computed: {
    ...mapGetters([UNIQUE_ORGANIZATIONS]),
  },
  methods: {
    ...mapMutations([ADD_SELECTED_ORGANIZATIONS]),
    selectedOrganization() {
      this.ADD_SELECTED_ORGANIZATIONS(this.selectedOrganizations);
      this.$router.push({ name: "JobResultsView" });
    },
  },
};
</script>

<style></style>
