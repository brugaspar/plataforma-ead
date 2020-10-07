const boom = require("@hapi/boom");

const { findByEmail } = require("../repositories/user.repository");
const hash = require("../utils/hash");

const login = async (req, h) => {
  const user = await findByEmail(req.payload.email);

  if(!user) {
    throw boom.notFound("User does not exists");
  }

  const isValidPassword = await hash.compare(req.payload.password, user.password);

  if(!isValidPassword) {
    throw boom.badData("Invalid e-mail or password");
  }

  return h.response({ message: "Successfully logged in" }).code(200);
};

module.exports = {
  login
};