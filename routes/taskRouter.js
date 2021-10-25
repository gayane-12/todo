const express = require("express");
const TaskController = require("../controllers/taskController");

module.exports = class TaskRouter {
  constructor(app) {
    this.app = app;
    this.configureRoutes();
  }

  configureRoutes() {
    this.app
      .route(`/tasks`)
      .get(TaskController.getTasks)
      .post(TaskController.addTask);
    this.app
      .route(`/tasks/:id`)
      .put(TaskController.updTasks)
      .delete(TaskController.delTasks);

    return this.app;
  }
};
