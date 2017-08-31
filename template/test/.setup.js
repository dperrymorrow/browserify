"use strict";

require("browser-env")(["window", "document", "navigator"]);
console.groupCollapsed = console.table = console.groupEnd = console.warn = function() {};

const Vue = require("vue");
const Vuex = require("Vuex");
const hooks = require("require-extension-hooks");
const SDK = require("@welocalize/pantheon-api-sdk");
const TethysVue = require("@welocalize/tethys-vue");
const chalk = require("chalk");

Vue.config.silent = true;
Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(TethysVue);

// to mock the localization methods in deep rendering of components
Vue.prototype.$t = str => str;

window.ENV = "test";
window.API_ENV = "test";
window.API_KEY = "fakeKey";
window.SESSION = {
  jwt: "fakeJwtString",
  decoded: { principal: 3 },
};

// simulating the sdk init
SDK.init({
  jwt: "---",
  apiKey: "---",
  env: "local",
  trace: false,
  fetch() {
    console.log("🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥 🔥");
    console.log("-> ", chalk.cyan.bold(arguments[0]));
    throw new Error(chalk.red("window.fetch was called, stub your SDK methods!!"));
  },
});

// keeping it from puking on transitions
window.getComputedStyle = () => {
  return {
    transitionDelay: "",
    animationDelay: "",
    transitionDuration: "",
    animationDuration: "",
  };
};

Vue.component("transition", {
  render(createElement) {
    return createElement("div", this.$slots.default);
  },
});

// Setup vue files to be processed by `require-extension-hooks-vue`
hooks("vue").plugin("vue").push();

// Setup vue and js files to be processed by `require-extension-hooks-babel`
hooks(["vue", "js"]).plugin("babel").push();
