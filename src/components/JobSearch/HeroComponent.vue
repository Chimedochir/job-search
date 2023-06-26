<template>
  <main class="flex flex-col h-screen">
    <section class="flex flex-col pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <HeadLine />
          <JobSearchFormVue />
        </div>
        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
            class="w-80 h-80 object-contain"
          />
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
    <spot-light-component class="flex flex-row justify-center pb-16">
      <template #default="slotProps">
        <router-link
          to="/jobs/results"
          class="flex flex-col mx-5 border rounded-lg w-72 bg-brand-gray-2 h-96"
          :style="{ width: '530px', height: '268px' }"
        >
          <div
            class="flex flex-col justify-end h-full bg-cover"
            :style="{ backgroundImage: 'url(' + slotProps.spotlight.img + ')' }"
          >
            <div class="text-white">
              <div class="px-6 py-4">
                <h3 class="text-lg font-medium">
                  {{ slotProps.spotlight.title }}
                </h3>
                <p class="mt-3 text-sm">
                  {{ slotProps.spotlight.description }}
                </p>
              </div>
            </div>
            <router-link
              to="/jobs/results"
              class="px-6 pb-4 text-sm text-brand-blue-1"
              >See jobs</router-link
            >
          </div>
        </router-link>
      </template>
    </spot-light-component>
  </main>
</template>
<script>
import HeadLine from "@/components/JobSearch/HeadLine.vue";
import JobSearchFormVue from "@/components/JobSearch/JobSearchForm.vue";
import SpotLightComponent from "./SpotLightComponent.vue";
export default {
  name: "HeroComponent",
  components: {
    HeadLine,
    JobSearchFormVue,
    SpotLightComponent,
  },
};
</script>
