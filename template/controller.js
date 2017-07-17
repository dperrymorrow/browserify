"use strict";

function index(request, reply) {
  reply.view("vendorPortal/index", {
    SESSION: request.auth.credentials,
  });
}

module.exports = {
  {{ destDirName }}: { method: "GET", path: "/{{ name }}", handler: index },
};
