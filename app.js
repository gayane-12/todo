const express = require("express");
const mongoose = require("mongoose");
const CommonMiddleWare = require("./middlewares/commonMiddleware");
const TaskRouter = require("./routes/taskRouter");

module.exports = class App {
  constructor(port) {
    this.app = express();
    this.port = port;
    this.configure();
  }

  connect() {
    mongoose.connect("mongodb://localhost:27017/todo").then(() => {
      this.app.listen(this.port);
    });
  }

  configure() {
    this.addMiddlewares();
  }

  addMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.addRoutes();
    this.app.use(CommonMiddleWare.routeNotFound);
  }

  addRoutes() {
    new TaskRouter(this.app);
  }
};
