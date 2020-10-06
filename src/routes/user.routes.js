const userHandler = require("../handlers/user.handler");
const userSchema = require("../schemas/user.schema");


module.exports = [
  {
    method: "POST",
    path: "/users",
    handler: userHandler.create,
    options: {
      validate: {
        payload: userSchema
      }
    }
  }
];