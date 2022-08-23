const knex = require("../knex");
const THINGS_TABLE = "things";
const USERS_TABLE = "users";

module.exports = {
  create: function (newItem) {
    return knex(THINGS_TABLE)
      .insert(newItem, ["description", "user_id", "checked_in"])
      .then((res) => res[0]);
  },

  getbyID: function (id) {
    return (
      knex
        .select({
          // name: "name",
          item: "description",
          date: "checked_in",
          archived: "archived",
          userID: "user_id",
        })
        .from(THINGS_TABLE)
        // .join(USERS_TABLE, "users.id", "=", "things.user_id")
        .where("user_id", id)
    );
  },
};
