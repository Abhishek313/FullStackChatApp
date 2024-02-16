const http     = require("http");
const express  = require("express");
const cors     = require("cors");
const socketIO = require("socket.io")

const app      = express();
const port     = 3000 || process.env.PORT;

const server   = http.createServer(app);

const io       = socketIO(server);

io.on("connection",() => {
    console.log("New Connection");
})

app.get('/',(req,res) => {
    res.send("hello there");
})

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})