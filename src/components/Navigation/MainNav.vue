<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
      <div
        class="flex flex-nowrap h-full px-8 mx-auto border-b border-solid border-brand-gray-1"
      >
        <a :href="url" class="flex items-center text-xl font-bold h-full">{{
          company
        }}</a>
        <nav class="h-full ml-12">
          <ul class="flex m-0 p-0 h-full list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.name"
              class="h-full ml-9 first:ml-0"
            >
              <router-link
                :to="menuItem.url"
                class="flex items-center h-full py-2.5"
                >{{ menuItem.name }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="flex items-center h-full ml-auto">
          <profile-image v-if="isLoggedIn" data-test="profile-image" />
          <action-button
            v-else
            type="primary"
            data-test="login-button"
            text="Sign in"
            @click="LOGIN_USER"
          />
        </div>
      </div>
      {{ exampleStore }}
      <sub-nav v-if="isLoggedIn" data-test="subnav"></sub-nav>
    </div>
  </header>
</template>
<script>
import { mapState, mapMutations } from "vuex";
import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import SubNav from "@/components/Navigation/SubNav.vue";
import { LOGIN_USER } from "@/store/index.js";
export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    SubNav,
  },
  data() {
    return {
      url: "https://careers.google.com",
      company: "Google Careers",
      menuItems: [
        { name: "Teams", url: "/" },
        { name: "Location", url: "/" },
        { name: "Life at Bobo Corp", url: "/" },
        { name: "How we hire", url: "/" },
        { name: "Students", url: "/" },
        { name: "Jobs", url: "/jobs/results" },
      ],
    };
  },
  computed: {
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn,
        "h-32": this.isLoggedIn,
      };
    },
    // isLoggedIn() {
    //   return this.$store.state.isLoggedIn;
    // },
    ...mapState(["isLoggedIn"]),
  },
  methods: {
    // LOGIN_USER() {
    //   // this.isLoggedIn = true;
    //   return this.$store.commit("LOGIN_USERas");
    // },
    ...mapMutations([LOGIN_USER]),
  },
};
</script>
<style></style>
