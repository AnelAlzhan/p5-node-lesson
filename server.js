console.log("up and running");

const { prototype } = require("events");
let express = require("express");

let app = express();

let port = 3000;

let server = app.listen(port);

console.log("server is runninig on http://localhost:" + port);

app.use(express.static("public"));

let serverSocket = require("socket.io");

let io = serverSocket(server);

io.on("connection", newConnection);

function newConnection(newSocket) {
  console.log(newSocket.id);
}
