import { mount } from "avoriaz";
import test from "ava";
import Vue from "vue";
import App from "../src/App.vue";

Vue.config.silent = true;

test.beforeEach(t => {
  t.context.wrapper = mount(App, {
    globals: {
      $t: str => str,
      $store: {
        getters: {
          "loading/isLoading": true,
        },
      },
    },
  });
});

test("loader renders", t => {
  const loader = t.context.wrapper.find(".loader-animation")[0];
  t.is(loader.isVueComponent);
});

test("has a logout link", t => {
  const anchor = t.context.wrapper.first("a");
  t.true(anchor.hasAttribute("href", "/auth/logout"));
});

test("has a nav", t => {
  // console.log(t.context.wrapper.html());
  const nav = t.context.wrapper.find("nav");
  t.is(nav.length, 1);
});
