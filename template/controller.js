"use strict";

function index(request, reply) {
  reply.view("{{ destDirName }}/index", {
    SESSION: request.auth.credentials,
  });
}

module.exports = {
  index: {
    method: "GET",
    path: "/{{ name }}",
    handler: index,
    config: {
      plugins: {
        hapiAclAuth: {
          // the roles you add here will determine what users can view this url
          roles: ["admin"],
        },
      },
    },
  },
};
