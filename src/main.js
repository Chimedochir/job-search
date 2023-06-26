import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";
import router from "./router";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import store from "./store";
library.add(faSearch);
createApp(App)
  .use(store)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
