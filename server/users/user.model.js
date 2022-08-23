const knex = require("../knex");
const USERS_TABLE = "users";

// where({column: argument})
module.exports = {
  login: function (name, pswd) {
    return knex.select("id", "name", "password").from(USERS_TABLE).where({
      name: name,
      password: pswd,
    });
  },
};
