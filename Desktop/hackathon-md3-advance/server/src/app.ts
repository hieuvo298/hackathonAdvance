import express, { urlencoded } from "express";
import * as fs from "fs";
import cors from "cors";
import Router from "./controllers";
const server = express();
const PORT = 8000;
import * as bodyParser from "body-parser";

server.use(urlencoded());
server.use(bodyParser.json());

server.use(express.static("public"));
server.use(cors());

Router(server);

server.listen(PORT, () => {
  console.log(`sever listening on ${PORT},http://localhost:${PORT}`);
});
