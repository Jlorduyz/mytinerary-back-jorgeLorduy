import express from "express";
import "dotenv/config.js";
import "./Config/dataBase.js";
import cors from "cors";
import morgan from "morgan";
import router from "./Router/index.js";
import error_404 from "./Middlewares/error_handler_404.js";
import error_handler from "./Middlewares/error_handler.js";
import error_400 from "./Middlewares/error_handler_400.js";

const server = express();

const PORT = process.env.PORT;

const ready = () => console.log("Server running in PORT : " + PORT);

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());
server.use(morgan("dev"));

server.use("/api", router);
server.use(error_404);
server.use(error_400);
server.use(error_handler);
server.listen(PORT, ready);
