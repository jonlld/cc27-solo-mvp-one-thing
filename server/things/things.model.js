const knex = require("../knex");
const THINGS_TABLE = "things";

// where({column: argument})
module.exports = {
  create: function (thing) {
    return knex("things")
      .insert(thing)
      .then((res) => res[0]);
  },
};
