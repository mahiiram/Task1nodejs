const express = require("express");
const bodyparser = require("body-parser");
const app_server = require("./app");
const server = express();


server.use(bodyparser.json());
server.use(bodyparser.urlencoded({ extended:true }))

server.use('/api', app_server)


const PORT = 5000;
server.listen(PORT,'localhost',() => {
    console.log('server started', PORT);
});

