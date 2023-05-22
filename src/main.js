import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueGtag from "vue-gtag";

import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.use(
  VueGtag,
  {
    includes: [{ id: "G-HJ54RR0GP5" }], // vivekshotti.tech GA ID
    config: { id: "G-L7TQMS4WDV" }, // vivekshotti.software GA ID
  },
  router
);

app.mount("#app");
