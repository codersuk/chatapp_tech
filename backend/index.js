// @author:  Bhavesh Ramburn
// Following https://socket.io/get-started/chat/
var app = require("express")();
var http = require("http").Server(app);

// enable Socket.io
var io = require('socket.io')(http);

// Start the code
app.get("/", (req, res) => {
    res.send("<h1>hello world</h1>");
});

// Setup the io ON listener

io.on('connection', (socket) => {
    console.log(socket);
    console.log('Connected');
});


http.listen(3001, () => {
    console.log("listening on *:3001 http://localhost:3001");
});
