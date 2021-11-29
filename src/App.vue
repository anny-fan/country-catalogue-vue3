<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <CountryCatalogue msg="Welcome to Your Vue.js App" />
</template>

<script>
import CountryCatalogue from "./components/CountryCatalogue.vue";
import { inject } from "vue";

export default {
  name: "App",
  components: {
    CountryCatalogue,
  },
  setup() {
    const axios = inject("axios"); // inject axios
    // const getList = () => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log(response.data);
    });
    // };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
