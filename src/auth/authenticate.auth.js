const Token = require("./token.auth");

const { findByEmail } = require("../repositories/user.repository");

const { LOGIN_EXPIRATION_TIME } = require("./config");
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

  const jwtData = {
    iss: "api-ead",
    sub: user._id,
    exp: Math.floor(Date.now() / 1000) + LOGIN_EXPIRATION_TIME
  };

  const token = await Token.generate(jwtData);

  return token;
};

module.exports = {
  login
};