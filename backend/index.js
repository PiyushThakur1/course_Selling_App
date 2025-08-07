const express = require("express");
const mongoose = require("mongoose");

const { userRouter } = require("./routes/user");
const {
  courseRouter,
} = require("./routes/course");
const { adminRouter } = require("./routes/admin");

const app = express();

app.use("/api/v1/user", userRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/admin", adminRouter);

async function main() {
  await mongoose.connect(
    "mongodb+srv://piyusshthakur5:Devops12%40@cluster0.oewvf0b.mongodb.net/course-app"
  );
  app.listen(3000);
  console.log("listening on port");
  
}

main();
