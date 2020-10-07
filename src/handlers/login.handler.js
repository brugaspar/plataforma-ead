const boom = require("@hapi/boom");

const authenticate = require("../auth/authenticate.auth");
const { ERR_USER_NOT_FOUND, ERR_INVALID_PASSWORD, ERR_INVALID_TOKEN } = require("../utils/errorTypes");

const login = async (req, h) => {
  const { email, password } = req.payload;

  try {
    const token = await authenticate.login(email, password);
    
    return h.response({ token }).code(200);
  } catch(err) {
    switch(err.message) {
      case ERR_USER_NOT_FOUND:
        throw boom.notFound("User does not exists");
      case ERR_INVALID_PASSWORD:
        throw boom.badData("Invalid email or password");
      case ERR_INVALID_TOKEN:
        throw boom.badImplementation("Unexpected error when trying to generate token");
      default:
        throw boom.badImplementation(err);
    }
  }
};

module.exports = {
  login
};