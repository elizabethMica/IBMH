const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const route = require('./Routes/routes.js');

const server = express();

server.use(express.json({ limit: "50mb" }));
server.use(express.urlencoded({ limit: "50mb", extended: true }));
server.use(morgan("dev"));
server.use(cors());

server.use("/", route);

module.exports = server;