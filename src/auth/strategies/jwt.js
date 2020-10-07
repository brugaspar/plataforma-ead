const { ALGORITHM } = require("../../auth/config");

const name = "jwt";

const schema = "jwt";

const options = {
  key: process.env.SECRET_KEY,
  validate: (decoded, request, h) => {
    return { isValid: true }
  },
  verifyOptions: {
    algorithm: [ ALGORITHM ]
  }
};

module.exports = {
  name,
  schema,
  options
};