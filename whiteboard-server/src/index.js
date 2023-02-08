const fs = require("fs");
const path = require("path");
const dir = "/etc/letsencrypt/live/i8b207.p.ssafy.io/";

const options = {
  ca: fs.readFileSync(path.resolve(dir, "fullchain.pem")),
  key: fs.readFileSync(path.resolve(dir, "privkey.pem")),
  cert: fs.readFileSync(path.resolve(dir, "cert.pem")),
};

const httpsServer = require("https").createServer(options, (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Origin", "https://i8b207.p.ssafy.io:3000");
  response.setHeader("Access-Control-Allow-Credentials", "true");
  console.log("Received request for " + request.url);
  response.writeHead(404);
  response.end();
});
const io = require("socket.io")(httpsServer, { cors: { origin: "*" } });
const port = 8001;

io.on("connection", (socket) => {
  socket.on("drawing", function (data) {
    //Let every user know of the current drawing data, except current user who is drawing
    socket.broadcast.emit("drawing", data);
  });
});

httpsServer.listen(port, () => console.log(`server is running on port ${port}`));
