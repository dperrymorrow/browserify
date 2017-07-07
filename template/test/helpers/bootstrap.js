"use strict";

const sinon = require("sinon");
const SDK = require("@welocalize/pantheon-api-sdk");

module.exports = {
  sdk: {
    stub(method, payload = {}) {
      const promise = new Promise((resolve, reject) => {
        return resolve(payload);
      });
      return {
        stub: sinon.stub(SDK, method).returns(promise),
        promise,
      };
    },
  },
};
