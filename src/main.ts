import { createApp } from "vue-demi";
import App from "./App.vue";
import VueTianditu from "~/index";

const app = createApp(App);
app.use(VueTianditu, { v: "4.0", tk: import.meta.env.VITE_TDT_TOKEN });
app.mount("#app");
