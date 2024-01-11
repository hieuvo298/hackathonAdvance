import { Express } from "express";

import userController from "./user.controller";

const Router = (server: Express) => {
  server.use("/user", userController);
};

export default Router;
