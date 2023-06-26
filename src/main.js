import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faSearch,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import store from "@/store";
library.add(faSearch);
library.add(faAngleDown);
library.add(faAngleUp);
createApp(App)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
