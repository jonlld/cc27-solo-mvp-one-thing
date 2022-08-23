const knex = require("../knex");
const THINGS_TABLE = "things";

module.exports = {
  create: function (newItem) {
    return knex(THINGS_TABLE)
      .insert(newItem)
      .then((res) => res[0]);
  },
};
