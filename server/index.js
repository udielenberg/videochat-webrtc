const server = require("./server");
const config = require("./config");

config.PORT = process.env.PORT || config.PORT;

server.run(config);
