"use strict";

function index(request, reply) {
  reply.view("{{ destDirName }}/index", {
    SESSION: request.auth.credentials,
  });
}

module.exports = {
  index: { method: "GET", path: "/{{ name }}", handler: index },
};
