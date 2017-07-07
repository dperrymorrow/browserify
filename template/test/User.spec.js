"use strict";

import { mount, shallow } from "avoriaz";
import test from "ava";
import Vue from "vue";
import Bootstrap from "./helpers/Bootstrap";
import User from "../src/components/User.vue";

// stub SDK calls that your component will be making...
// needs to be outside beforeEach as cannot stub same method multiple times
const { stub, promise } = Bootstrap.sdk.stub("userShow", { name: "David" });

test.beforeEach(t => {
  t.context.wrapper = mount(User, {
    globals: {
      // $t: str => str, // if you have vue-i18n enabled
      // $store: {}, // if you need to mock Vuex $store
    },
  });
});

test("gets current user from sdk", t => {
  const sdkArgs = stub.getCall(0).args;
  t.is(sdkArgs[0], SESSION.decoded.principal);
});

test("assigns user retrieved from SDK", t => {
  return promise.then(() => {
    t.context.wrapper.update();
    t.is(t.context.wrapper.data().user.name, "David");
  });
});

test("renders the user into the <pre>", t => {
  t.context.wrapper.setData({ user: { name: "Fred" } });
  t.is(JSON.parse(t.context.wrapper.find("pre")[0].text()).name, "Fred");
});
