const Task = require("../model/task");

module.exports = class TaskController {
  static addTask(req, res) {
    const task = new Task({
      text: req.body.text,
    });

    task.save(function (err, doc) {
      if (err) {
        res.send(err);
      }
      res.send(doc);
    });
  }

  static getTasks(req, res) {
    Task.find({}, (err, doc) => {
      if (err) {
        res.send(err);
      }
      res.send(doc);
    });
  }

  static updTasks(req, res) {
    const id = req.params.id;
    Task.findByIdAndUpdate(id, { status: true }, function (err, doc) {
      if (err) {
        res.send(err);
      }
      res.send(doc);
    });
  }

  static delTasks(req, res) {
    const id = req.params.id;
    Task.findByIdAndDelete(id, function (err, doc) {
      if (err) {
        res.send(err);
      }
      res.send(doc);
    });
  }
};
