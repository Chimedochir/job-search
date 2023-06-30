<template>
  <accordion-component :header="header">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li v-for="value in uniqueValues" :key="value" class="w-1/2 h-8">
            <input
              :id="value"
              v-model="selectedValues"
              type="checkbox"
              class="mr-3"
              :value="value"
              @change="selectedValue"
            />
            <label :for="value">{{ value }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </accordion-component>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import AccordionComponent from "@/components/Shared/AccordionComponent.vue";
export default {
  name: "JobFiltersSidebarCheckboxGroup",
  components: { AccordionComponent },
  props: {
    header: { type: String, required: true },
    uniqueValues: { type: Set, required: true },
    mutation: { type: String, required: true },
  },

  setup(props) {
    const router = useRouter();
    const store = useStore();
    const selectedValues = ref([]);
    const selectedValue = () => {
      store.commit(props.mutation, selectedValues.value);
      router.push({ name: "JobResultsView" });
    };
    return { selectedValues, selectedValue };
  },
};
</script>

<style></style>
