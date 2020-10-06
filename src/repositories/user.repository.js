const UserModel = require("../models/user.model");

const create = (userData) => {
  const userModel = new UserModel(userData);

  return userModel.save();
};

module.exports = {
  create
};