const jwt = require("jsonwebtoken");

const { ALGORITHM } = require("./config");
const { ERR_INVALID_TOKEN } = require("../utils/errorTypes");

const generate = payload => (
  new Promise(resolve => {
    jwt.sign(payload, process.env.SECRET_KEY, { algorithm: ALGORITHM }, (err, token) => {
      if(err) {
        throw new Error(ERR_INVALID_TOKEN);
      }

      resolve(token);
    });
  })
);

module.exports = {
  generate
};