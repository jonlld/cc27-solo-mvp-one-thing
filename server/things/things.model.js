const knex = require("../knex");
const THINGS_TABLE = "things";

// BUG sending undefined
module.exports = {
  create: function (newItem) {
    return knex(THINGS_TABLE)
      .insert(newItem, ["description", "user_id"])
      .then((res) => res[0]);
  },
};
