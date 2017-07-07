"use strict";

require("browser-env")(["window", "document", "navigator"]);
console.groupCollapsed = console.table = console.groupEnd = console.warn = function() {};

const Vue = require("vue");
const hooks = require("require-extension-hooks");
const SDK = require("@welocalize/pantheon-api-sdk");

const fakeSession = {
  jwt: "fakeJwtString",
  decoded: { principal: 3 },
};

Vue.config.silent = true;

global.ENV = "test";
global.API_KEY = "fakeKey";
global.SESSION = fakeSession;

SDK.init({
  jwt: "---",
  apiKey: "---",
  env: "local",
  trace: false,
});

// Setup vue files to be processed by `require-extension-hooks-vue`
hooks("vue").plugin("vue").push();

// Setup vue and js files to be processed by `require-extension-hooks-babel`
hooks(["vue", "js"]).plugin("babel").push();
