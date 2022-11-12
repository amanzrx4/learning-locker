module.exports = [
  "strapi::errors",
  "strapi::security",
  // 'strapi::cors',
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      headers: "*",
      origin: ['http://localhost:1337', 'http://localhost:5173'],
    },
  },

  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
