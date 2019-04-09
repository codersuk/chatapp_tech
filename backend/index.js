// @author:  Bhavesh Ramburn
// Following https://socket.io/get-started/chat/
const app = require("express")();
const http = require("http").Server(app);

// enable Socket.io
const io = require("socket.io")(http);
const port = 3001;

// Start the code
app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
  // res.sendFile(__dirname + '/public/index.hmtl');
});

// Setup the io ON listenerá

// on(event) == the 'connection' is an event
io.on("connection", socket => {
  console.log("User Connected");
  socket.emit("message", { kaps: "hey how are you doingg?" });
  socket.on("another event", data => {
    // process the data
    console.log(data);
  });
});

http.listen(port, () => {
  console.log("listening on *:${port} http://localhost:${port}");
});
