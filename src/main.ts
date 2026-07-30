import { createApp } from "vue";
import VueTianditu from "vue-tianditu";
import App from "./App.vue";

const app = createApp(App);
app.use(VueTianditu);
app.mount("#app");
