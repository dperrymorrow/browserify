"use strict";

import { mount, shallow } from "avoriaz";
import test from "ava";
import User from "../src/components/User.vue";
import sinon from "sinon";
import SDK from "@welocalize/pantheon-api-sdk";

// stub SDK calls that your component will be making...
const fakeUser = { name: "Dave" };
const userShow = sinon.stub(SDK, "userShow").resolves(fakeUser);

test.beforeEach(t => {
  t.context.opts = {
    // store, // if  you have a store you can pass here...
    data: { user: fakeUser },
    globals: {},
    propsData: {},
  };
});

test("gets current user from sdk", t => {
  const wrapper = mount(User, t.context.opts);
  t.true(userShow.calledWith(window.SESSION.decoded.principal));
});

test("assigns user retrieved from SDK", t => {
  const wrapper = mount(User, t.context.opts);
  t.is(wrapper.data().user.name, fakeUser.name);
});

test("renders the user into the <pre>", t => {
  t.context.opts.data = { user: { name: "Fred" } };
  const wrapper = mount(User, t.context.opts);
  t.true(wrapper.find("pre")[0].text().includes("Fred"));
});
