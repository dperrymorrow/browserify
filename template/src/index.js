// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from "vue";
import App from "./App.vue";
import SDK from "@welocalize/pantheon-api-sdk";

// setup the sdk so we can begin making calls
SDK.init({
  jwt: SESSION.jwt,
  // store, // if you want vuex, pass your instance here
  apiKey: API_KEY,
  env: API_ENV,
});

new Vue({
  // eslint-disable-line no-new
  el: "#app",
  render: h => h(App),
});
