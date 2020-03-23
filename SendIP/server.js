const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io").listen(server);
const os = require("os");
const ioclient = require("socket.io-client");
const port = 8181;

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

var socket = ioclient("http://localhost:8000");

var ifaces = os.networkInterfaces()



socket.on("sendmess", function (data) {
    console.log(data);
    if (data === "IP???") {
        socket.emit("sendIP", ifaces);
        console.log("Đã kết nối!!");
    }else{
        console.log("Chưa nhận được kết nối!!!");
    }
})

server.listen(port, function () {
    console.log(`Ứng dụng đang lắng nghe tại cổng ${port}`);
})

