module.exports = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: ['http://localhost:3000'], // Adjust this to your frontend URL
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true, // Enable credentials if you're using cookies or authentication
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
