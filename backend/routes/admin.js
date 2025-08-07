const { Router } = require("express");

const adminRouter = Router();
const { adminModel } = require("../database/db");

adminRouter.post("/signup", function (req, res) {
  res.json({
    message: "Signup Endpoint",
  });
});
adminRouter.post("/signin", function (req, res) {
  res.json({
    message: "Signin Endpoint",
  });
});
adminRouter.post("/course", function (req, res) {
  res.json({
    message: "Signin Endpoint",
  });
});
adminRouter.post(
  "/course/change",
  function (req, res) {
    res.json({
      message: "Signin Endpoint",
    });
  }
);
adminRouter.post(
  "/course/bulk",
  function (req, res) {
    res.json({
      message: "Signin Endpoint",
    });
  }
);
module.exports = {
  adminRouter: adminRouter,
};
