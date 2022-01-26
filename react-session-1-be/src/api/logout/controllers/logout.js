"use strict";

/**
 * A set of functions called "actions" for `logout`
 */

module.exports = {
  logout: async (ctx, next) => {
    try {
      ctx.body = "ok";
    } catch (err) {
      ctx.body = err;
    }
  },
};
