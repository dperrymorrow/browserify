"use strict";

function index(request, reply) {
  const ROUTES = request.server.app.ROUTES;
  const CONFIG = request.server.app.CONFIG;

  reply.view("{{ destDirName }}/index", {
    CONFIG,
    ROUTES,
    ENV: request.server.app.ENV,
    SESSION: request.auth.credentials,
  });
}

module.exports = {
  {{ destDirName }}: { method: "GET", path: "/{{ name }}", handler: index },
};
