module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c49e7b9b9c1d121e0ec5f9af05db005c'),
  },
});
