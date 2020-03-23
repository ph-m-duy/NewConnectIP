const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io").listen(server);
const port = 8000;

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

io.on("connection", function (socket) {
    socket.on('sendIP', function(data){
        console.log(data);
    })
    socket.emit("sendmess", "IP???");
 });

server.listen(port, function () {
    console.log(`Ứng dụng đang lắng nghe tại cổng ${port}`);
})

