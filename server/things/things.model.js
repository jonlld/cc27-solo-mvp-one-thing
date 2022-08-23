const knex = require("../knex");
const THINGS_TABLE = "things";

module.exports = {
  create: function (newItem) {
    return knex(THINGS_TABLE)
      .insert(newItem, ["description", "user_id", "checked_in"])
      .then((res) => res[0]);
  },
};
