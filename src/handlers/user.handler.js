const boom = require("@hapi/boom");

const userRepository = require("../repositories/user.repository");

const { ERR_DUPLICATED_EMAIL } = require("../utils/errorTypes");
const hash = require("../utils/hash");

const create = async (req, h) => {
  try {
    const userData = req.payload;

    const hashedPassword = await hash.make(userData.password);

    userData.password = hashedPassword;

    const user = await userRepository.create(userData);

    return h.response(user).code(201);
  } catch(err) {
    switch(err.message) {
      case ERR_DUPLICATED_EMAIL:
        throw boom.badData("E-mail already exists");
      default:
        throw boom.badImplementation(err);
    }
  }
};

module.exports = {
  create
};