import * as Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";

const app = Vue.createApp(App);
app.use(VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios);
app.mount("#app");
