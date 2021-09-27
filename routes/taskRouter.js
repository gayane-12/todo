const express = require("express");
const taskController = require("../controllers/taskController");
const taskRouter = express.Router();

taskRouter.post("/create", taskController.addTask);
taskRouter.get("/", taskController.getTasks);
taskRouter.put("/update/:id", taskController.updTasks);
taskRouter.delete("/delete/:id", taskController.delTasks);

module.exports = taskRouter;
