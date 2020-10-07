const { findByEmail } = require("../repositories/user.repository");

const { ERR_USER_NOT_FOUND, ERR_INVALID_PASSWORD } = require("../utils/errorTypes");
const hash = require("../utils/hash");

const login = async (email, password) => {
  const user = await findByEmail(email);

  if(!user) {
    throw new Error(ERR_USER_NOT_FOUND);
  }

  const isValidPassword = await hash.compare(password, user.password);

  if(!isValidPassword) {
    throw new Error(ERR_INVALID_PASSWORD);
  }

  return { message: "Successfully logged in" };
};

module.exports = {
  login
};