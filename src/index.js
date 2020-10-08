require("dotenv").config();
require("./services/mongo.service");

const jwtHapiAuth = require("hapi-auth-jwt2");

const server = require("./server");
const routes = require("./routes");

const jwtStrategy = require("./auth/strategies/jwt");

const init = async () => {
  server.route(routes);

  await server.register(jwtHapiAuth);

  server.auth.strategy(jwtStrategy.name, jwtStrategy.schema, jwtStrategy.options);

  server.auth.default(jwtStrategy.name);

  await server.start().then(console.log("\nServer running on %s\n", server.info.uri));
};

process.on("uncaughtException", (err) => {
  console.log(err);
  process.exit(1);
});

init();