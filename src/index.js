require("dotenv").config();
require("./services/mongo.service");

const server = require("./server");
const routes = require("./routes");

const init = async () => {
  server.route(routes);

  await server.start().then(console.log("\nServer running on %s\n", server.info.uri));
};

process.on("uncaughtException", (err) => {
  console.log(err);
  process.exit(1);
});

init();