module.exports = class CommonMiddleWare {
  static routeNotFound() {
    return function (req, res) {
      res.status(404).send("not found");
    };
  }
};
