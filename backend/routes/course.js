const { Router } = require("express");

const courseRouter = Router();

courseRouter.post(
  "/purchase",
  function (req, res) {
    res.json({
      message: "purchase Endpoint",
    });
  }
);
courseRouter.get("/preview", function (req, res) {
  res.json({
    message: "course preview Endpoint",
  });
});

module.exports = {
  courseRouter: courseRouter,
};
