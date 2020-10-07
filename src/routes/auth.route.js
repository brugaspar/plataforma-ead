const loginHandler = require("../handlers/login.handler");
const loginSchema = require("../schemas/login.schema");

module.exports = [
  {
    method: "POST",
    path: "/login",
    handler: loginHandler.login,
    options: {
      auth: false,
      validate: {
        payload: loginSchema
      }
    }
  }
];