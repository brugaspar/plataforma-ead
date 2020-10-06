const Hapi = require("@hapi/hapi");

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: "localhost"
  });

  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Hello World!";
    }
  });

  await server.start().then(console.log("\nServer running on %s\n", server.info.uri));
};

process.on("uncaughtException", (err) => {
  console.log(err);
  process.exit(1);
});

init();