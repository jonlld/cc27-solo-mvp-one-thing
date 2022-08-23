const knex = require("../knex");
const THINGS_TABLE = "things";
const USERS_TABLE = "users";

module.exports = {
  create: function (newItem) {
    return knex(THINGS_TABLE)
      .insert(newItem, ["description", "user_id", "checked_in"])
      .then((res) => res[0]);
  },

  getByID: function (id) {
    return knex
      .select({
        name: "name",
        item: "description",
        date: "checked_in",
        archived: "archived",
      })
      .from(THINGS_TABLE)
      .join(USERS_TABLE, "users.id", "things.user_id")
      .where("user_id", id);
  },
};
