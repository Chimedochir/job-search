import { createRouter, createWebHashHistory } from "vue-router";

const HomeView = () => import("@/views/HomeView.vue");
const JobResultsView = () => import("@/views/JobResultsView.vue");
const JobView = () => import("@/views/JobView.vue");
const TeamsView = () => import("@/views/TeamsView.vue");
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/jobs/results",
    name: "JobResultsView",
    component: JobResultsView,
  },
  {
    path: "/jobs/results/:id",
    name: "JobListing",
    component: JobView,
  },
  {
    path: "/teams",
    name: "Teams",
    component: TeamsView,
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      left: 0,
      top: 0,
      behavior: "smooth",
    };
  },
});
export default router;
