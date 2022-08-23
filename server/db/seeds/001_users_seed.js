/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  await knex.raw("ALTER SEQUENCE users_id_seq RESTART WITH 100");

  await knex("users").insert([
    { id: 1, name: "Howard", password: "generic" },
    { id: 2, name: "Vince", password: "goth" },
    { id: 3, name: "Bob", password: "zoo" },
  ]);
};
