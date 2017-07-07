"use strict";

function index(request, reply) {
  const app = request.server.app;

  reply.view("tester/index", {
    CONFIG: app.CONFIG,
    ROUTES: app.ROUTES,
    VERSION: require("./package.json").version,
    SERVE_PACKED_ASSETS: app.ENV == "local" ? false : true,
    ENV: app.ENV,
    SESSION: request.auth.credentials,
  });
}

module.exports = {
  {{ destDirName }}: { method: "GET", path: "/{{ name }}", handler: index },
};
