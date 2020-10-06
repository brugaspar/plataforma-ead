const userRepository = require("../repositories/user.repository");

const create = async (req, h) => {
  const user = await userRepository.create(req.payload);

  return h.response(user).code(201);
};

module.exports = {
  create
};