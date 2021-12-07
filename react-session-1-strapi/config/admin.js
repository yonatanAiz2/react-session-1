module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2d47d0b68e15086accb15550d68e19c3'),
  },
});
