module.exports = {
  routes: [
    {
      method: "POST",
      path: "/logout",
      handler: "logout.logout",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
