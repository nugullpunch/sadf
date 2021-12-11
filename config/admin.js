module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c0b5af6f183956ce4cc7ae32b7fdf578'),
  },
});
