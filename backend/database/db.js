const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;
mongoose.connect(
  ""
);

const userSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstname: String,
  lastname: String,
});

const courseSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  imageUrl: String,
  createrId: ObjectId,
});

const adminSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
  firstname: String,
  lastname: String,
});

const purchaseSchema = new Schema({
  title: String,
  courseId: ObjectId,
  userId: ObjectId,
});

const userModel = mongoose.model(
  "user",
  userSchema
);
const adminModel = mongoose.model(
  "course",
  adminSchema
);
const courseModel = mongoose.model(
  "admin",
  courseSchema
);
const purchaseModel = mongoose.model(
  "purchase",
  purchaseSchema
);

module.exports = {
  userModel,
  adminModel,
  courseModel,
  purchaseModel,
};
// ref
