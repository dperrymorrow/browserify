"use strict";

function index(request, reply) {
  const ROUTES = request.server.app.ROUTES;
  const CONFIG = request.server.app.CONFIG;

  reply.view("{{ destDirName }}/index", {
    CONFIG,
    ROUTES,
    VERSION: require("./package.json").version,
    SERVE_PACKED_ASSETS: request.server.app.ENV == "local" ? false : true,
    ENV: request.server.app.ENV,
    SESSION: request.auth.credentials,
  });
}

module.exports = {
  {{ destDirName }}: { method: "GET", path: "/{{ name }}", handler: index },
};
