"use strict";

function index(request, reply) {
  const app = request.server.app;

  reply.view("{{ destDirName }}/index", {
    CONFIG: app.CONFIG,
    ROUTES: app.ROUTES,
    VERSION: require("./package.json").version,
    ENV: app.ENV,
    SESSION: request.auth.credentials,
  });
}

module.exports = {
  {{ destDirName }}: { method: "GET", path: "/{{ name }}", handler: index },
};
